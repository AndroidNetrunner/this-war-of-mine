import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import TradingRow from "./TradingRow";
import { ResourceName } from "../redux/slices/resourceSlice";
import ResourceStatus from "../interfaces/ResourceStatus";
import { update } from "../redux/slices/storageSlice";
import { reset } from "../redux/slices/tradingSlice";
import styles from "./styles/TradingInShelter.module.css";
import ResourceInfoList from "../interfaces/ResourceInfoList";

function isPossibleTrade(
  trading: { myself: ResourceStatus; opponent: ResourceStatus },
  resource: ResourceInfoList,
  comission: number
) {
  const { myself, opponent } = trading;
  const myValue = Object.keys(myself).reduce(
    (accumulator: number, currentValue: string) => {
      accumulator +=
        myself[currentValue as ResourceName] *
        resource[currentValue as ResourceName].value;
      return accumulator;
    },
    0
  );
  const opponentValue = Object.keys(opponent).reduce(
    (accumulator: number, currentValue: string) => {
      accumulator +=
        opponent[currentValue as ResourceName] *
        resource[currentValue as ResourceName].value;
      return accumulator;
    },
    0
  );
  return myValue && opponentValue && myValue >= opponentValue + comission;
}

export default function TradingInShelter({ comission }: { comission: number }) {
  const resource = useSelector((state: RootState) => state.resource);
  const storage = useSelector((state: RootState) => state.storage);
  const trading = useSelector((state: RootState) => state.trading);
  const dispatch = useDispatch();
  function trade(
    storage: ResourceStatus,
    trading: { myself: ResourceStatus; opponent: ResourceStatus }
  ) {
    const newStorage = { ...storage };
    Object.keys(newStorage).forEach((resource) => {
      newStorage[resource as ResourceName] +=
        trading.opponent[resource as ResourceName];
      newStorage[resource as ResourceName] -=
        trading.myself[resource as ResourceName];
    });
    return newStorage;
  }

  return (
    <>
      <Button
        onClick={() => {
          dispatch(update(trade(storage, trading)));
          dispatch(reset());
        }}
        disabled={!isPossibleTrade(trading, resource, comission)}
      >
        저장고에서 교환
      </Button>
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
              placeName="shelter"
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}
