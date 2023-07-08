import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TradingInShelter from "./TradingInShelter";
import TradingInOutside from "./TradingInOutside";
import styles from "./styles/Trading.module.css";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slices/tradingSlice";

export default function Trading() {
  const [tradingPlace, setTradingPlace] = useState("outside");
  const [comission, setComission] = useState(0);
  const dispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setTradingPlace(e.target.value);
    dispatch(reset());
  }
  return (
    <>
      <h1>
        거래 수수료:{" "}
        <Button
          variant="success"
          onClick={() => {
            setComission((prev) => prev + 1);
          }}
        >
          +
        </Button>
        {comission}
        <Button
          variant="danger"
          disabled={!comission}
          onClick={() => {
            setComission((prev) => prev - 1);
          }}
        >
          -
        </Button>
      </h1>
      <Form>
        <Form.Check
          value="shelter"
          label="피난처"
          checked={tradingPlace === "shelter"}
          onChange={handleChange}
        />
        <Form.Check
          value="outside"
          label="수집 지역"
          checked={tradingPlace === "outside"}
          onChange={handleChange}
        />
      </Form>
      {
        // 내 자원 테이블, 자원 가치, 상대 테이블 가져오기
        // 보유량이 0개인 경우 아예 띄우지 않기
      }
      {tradingPlace === "shelter" && <TradingInShelter comission={comission} />}
      {tradingPlace === "outside" && <TradingInOutside comission={comission} />}
    </>
  );
}
