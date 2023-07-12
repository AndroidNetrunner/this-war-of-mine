import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { ResourceName } from "../types/types";
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
  const [forSale, setForSale] = useState(() => getInitialSale(resourceList));
  return (
    <Table className={className}>
      <TradingTableHead possession={possession} />
      <tbody>
        {Object.entries(resourceList)
          .filter(([name, currentQuantity]) => currentQuantity !== 0)
          .map(([name, currentQuantity]) => (
            <TradingTableRow
              key={name}
              name={name as ResourceName}
              forSaleQuantity={forSale[name]}
              currentQuantity={currentQuantity}
              setForSale={setForSale}
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
  forSaleQuantity,
  currentQuantity,
  setForSale,
}: {
  name: ResourceName;
  forSaleQuantity: number;
  currentQuantity: number;
  setForSale: React.Dispatch<
    React.SetStateAction<{
      [key: string]: number;
    }>
  >;
}) {
  const { value, weight, korean } = useSelector(
    (state: RootState) => state.resource[name]
  );
  return (
    <tr>
      <td>{korean}</td>
      <td>{forSaleQuantity}</td>
      <td>{currentQuantity}</td>
      <td>{weight}</td>
      <td>{value}</td>
    </tr>
  );
}

function getInitialSale(resourceList: { [key: string]: number }) {
  return Object.keys(resourceList)
    .filter((key) => resourceList[key] != 0)
    .reduce((acc: { [key: string]: number }, key) => {
      acc[key] = 0;
      return acc;
    }, {});
}
