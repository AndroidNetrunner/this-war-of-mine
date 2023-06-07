import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import TradingRow from "./TradingRow";
import { ResourceName } from "../redux/slices/resourceSlice";
import ResourceStatus from "../interfaces/ResourceStatus";
import { update } from "../redux/slices/findingsSlice";
import { reset } from "../redux/slices/tradingSlice";
import styles from "./styles/TradingInOutside.module.css";
import ResourceInfoList from "../interfaces/ResourceInfoList";

export default function TradingInOutside({ comission }: { comission: number }) {
  const resource = useSelector((state: RootState) => state.resource);
  const findings = useSelector((state: RootState) => state.findings);
  const trading = useSelector((state: RootState) => state.trading);
  const dispatch = useDispatch();
  function trade(
    findings: ResourceStatus,
    trading: { myself: ResourceStatus; opponent: ResourceStatus }
  ) {
    const newfindings = { ...findings };
    Object.keys(newfindings).forEach((resource) => {
      newfindings[resource as ResourceName] +=
        trading.opponent[resource as ResourceName];
      newfindings[resource as ResourceName] -=
        trading.myself[resource as ResourceName];
    });
    return newfindings;
  }

  return (
    <>
      <Button
        variant="success"
        onClick={() => {
          dispatch(update(trade(findings, trading)));
          dispatch(reset());
        }}
        disabled={!isPossibleTrade(trading, resource, comission)}
      >
        발견물 더미에서 교환
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          dispatch(reset());
        }}
      >
        초기화
      </Button>
      <span>
        내 가치({calculateValue(trading.myself, resource)}) vs 상대 가치(
        {calculateValue(trading.myself, resource)}) + 거래 수수료({comission})
      </span>
      <Table>
        <thead>
          <tr className={styles.title}>
            <th>보유량</th>
            <th>판매량</th>
            <th>이름(가치)</th>
            <th>구매량</th>
            <th>재고량</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(resource).map((resource) => (
            <TradingRow
              key={resource}
              resource={resource as ResourceName}
              placeName="outside"
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

function isPossibleTrade(
  trading: { myself: ResourceStatus; opponent: ResourceStatus },
  resource: ResourceInfoList,
  comission: number
) {
  const { myself, opponent } = trading;
  const myValue = calculateValue(myself, resource);
  const opponentValue = calculateValue(opponent, resource);
  return myValue && opponentValue && myValue >= opponentValue + comission;
}

function calculateValue(
  resourceStatus: ResourceStatus,
  resource: ResourceInfoList
) {
  return Object.keys(resourceStatus).reduce(
    (accumulator: number, currentValue: string) => {
      accumulator +=
        resourceStatus[currentValue as ResourceName] *
        resource[currentValue as ResourceName].value;
      return accumulator;
    },
    0
  );
}
