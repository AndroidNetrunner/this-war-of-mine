import React, { useState, useMemo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/Trading.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import TradingTable from "./TradingTable";
import useTradingPlace from "../hooks/useTradingPlace";
import { reset } from "../redux/slices/tradingSlice";
import {
  createValueCalculator,
  getStuffOnSale,
  makeDeal,
} from "../utils/tradingUtils";
import ControlButton from "./ControlButton";
import TradingPlaceForm from "./TradingPlaceForm";
import {
  useMyselfResourceList,
  useOpponentResourceList,
} from "../hooks/useResourceList";

const INITIAL_COMMISION = 0;

export default function Trading() {
  const { tradingPlace, handleTradingPlaceChange } = useTradingPlace();
  const [comission, setComission] = useState(INITIAL_COMMISION);
  const storage = useSelector((state: RootState) => state.storage);
  const findings = useSelector((state: RootState) => state.findings);
  const resourceInfoList = useSelector((state: RootState) => state.resource);
  const { myself, opponent } = useSelector((state: RootState) => state.trading);
  const dispatch = useDispatch();

  const incrementComission = () => setComission((prev) => prev + 1);
  const decrementComission = () => {
    if (comission > 0) setComission((prev) => prev - 1);
  };
  const calculateValue = createValueCalculator(resourceInfoList);
  const myValue = calculateValue(myself);
  const opponentValue = calculateValue(opponent);
  return (
    <>
      <h1 className={styles.comission}>
        거래 수수료:{" "}
        <ControlButton
          onClick={{
            plus: incrementComission,
            minus: decrementComission,
          }}
          disabled={{
            plus: false,
            minus: !comission,
          }}
          data={comission}
        />
      </h1>
      <TradingPlaceForm
        tradingPlace={tradingPlace}
        handleTradingPlaceChange={handleTradingPlaceChange}
      />
      <div>
        내 가치: {myValue} vs 상대방 가치: {opponentValue} + 거래 수수료:{" "}
        {comission}
      </div>
      <Button
        variant="primary"
        onClick={() => {
          makeDeal(myself, opponent, tradingPlace, dispatch);
          dispatch(reset());
        }}
        disabled={myValue < opponentValue + comission}
      >
        거래 체결
      </Button>
      <div className={styles.container}>
        <div className={`${styles.flexItem} ${styles.myself}`}>
          <TradingTable
            possession="myself"
            className={styles.myself}
            resourceList={useMyselfResourceList(tradingPlace)}
          />
        </div>
        <div className={`${styles.flexItem} ${styles.opponent}`}>
          <TradingTable
            possession="opponent"
            className={styles.opponent}
            resourceList={useOpponentResourceList()}
          />
        </div>
      </div>
    </>
  );
}
