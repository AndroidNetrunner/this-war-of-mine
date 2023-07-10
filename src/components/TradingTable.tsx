import React from "react";
import Table from "react-bootstrap/Table";
import { ResourceName } from "../redux/slices/resourceSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styles from "./styles/TradingTable.module.css";

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
  return (
    <Table className={className}>
      <TradingTableHead possession={possession} />
      <tbody>
        {Object.entries(resourceList)
          .filter(([name, quantity]) => quantity !== 0)
          .map(([name, quantity]) => (
            <TradingTableRow
              key={name}
              name={name as ResourceName}
              quantity={quantity}
            />
          ))}
      </tbody>
    </Table>
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
  quantity,
}: {
  name: ResourceName;
  quantity: number;
}) {
  const { value, weight, korean } = useSelector(
    (state: RootState) => state.resource[name]
  );
  return (
    <tr>
      <td>{korean}</td>
      <td>{quantity}</td>
      <td>{weight}</td>
      <td>{value}</td>
    </tr>
  );
}
