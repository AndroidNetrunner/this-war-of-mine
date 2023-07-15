import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ResourceName } from "../types/types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import styles from "./styles/TradingTable.module.css";
import { add, discard } from "../redux/slices/tradingSlice";

export default function TradingTable({
  possession,
  resourceList,
  className,
}: {
  resourceList: {
    [name in ResourceName]: number;
  };
  possession: "myself" | "opponent";
  className: string;
}) {
  const forSale = useSelector((state: RootState) => state.trading[possession]);
  return (
    <>
      <Table className={className}>
        <TradingTableHead possession={possession} />
        <tbody>
          {Object.entries(resourceList)
            .filter(([name, currentQuantity]) => currentQuantity !== 0)
            .map(([name, currentQuantity]) => (
              <TradingTableRow
                key={name}
                name={name as ResourceName}
                forSaleQuantity={forSale[name as ResourceName]}
                currentQuantity={currentQuantity}
                possession={possession}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
}

function TradingTableHead({
  possession,
}: {
  possession: "myself" | "opponent";
}) {
  return (
    <thead>
      <tr>
        <th colSpan={5}>{possession === "myself" ? "나" : "상대방"}</th>
      </tr>
      <tr>
        <th>이름</th>
        <th>판매량</th>
        <th>재고량</th>
        <th>무게</th>
        <th>가치</th>
      </tr>
    </thead>
  );
}

function TradingTableRow({
  name,
  forSaleQuantity,
  currentQuantity,
  possession,
}: {
  name: ResourceName;
  forSaleQuantity: number;
  currentQuantity: number;
  possession: "myself" | "opponent";
}) {
  const { value, weight, korean } = useSelector(
    (state: RootState) => state.resource[name]
  );
  const dispatch = useDispatch();
  return (
    <tr className={styles.tradingTableRow}>
      <td>{korean}</td>
      <td>
        <Button
          variant="success"
          className={styles.plus}
          onClick={() =>
            dispatch(
              add({
                person: possession,
                resource: name,
              })
            )
          }
          disabled={forSaleQuantity >= currentQuantity}
        >
          +
        </Button>
        {forSaleQuantity}
        <Button
          variant="danger"
          className={styles.minus}
          onClick={() =>
            dispatch(
              discard({
                person: possession,
                resource: name,
              })
            )
          }
          disabled={!forSaleQuantity}
        >
          -
        </Button>
      </td>
      <td>{currentQuantity}</td>
      <td>{weight}</td>
      <td>{value}</td>
    </tr>
  );
}
