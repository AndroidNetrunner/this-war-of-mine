import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TradingInShelter from "./TradingInShelter";
import TradingInOutside from "./TradingInOutside";
import styles from "./styles/Trading.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/slices/tradingSlice";
import { RootState } from "../redux/store";
import TradingTable from "./TradingTable";

export default function Trading() {
  const [tradingPlace, setTradingPlace] = useState("outside");
  const [comission, setComission] = useState(0);
  const dispatch = useDispatch();
  const storage = useSelector((state: RootState) => state.storage);
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
      <div className={styles.container}>
        <TradingTable
          possession="myself"
          className={styles.myself}
          resourceList={storage}
        />
        <TradingTable
          possession="opponent"
          className={styles.opponent}
          resourceList={storage}
        />
      </div>
      {
        // TradingTable에서 거래 가능한 물품들 계산하는 함수 구현
      }
      {/* {tradingPlace === "shelter" && <TradingInShelter comission={comission} />}
      {tradingPlace === "outside" && <TradingInOutside comission={comission} />} */}
    </>
  );
}
