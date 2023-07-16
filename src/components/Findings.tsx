import React from "react";
import { Button, Table } from "react-bootstrap";
import styles from "./styles/Findings.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FindingsRow from "./ResourceRow";
import {
  ResourceName,
  ResourceInventory,
  ResourceInfoList,
} from "../types/types";
import useFindingsHandlers from "../hooks/useFindingsHandlers";

export default function Findings() {
  const { handleAddToStorage } = useFindingsHandlers();
  const findings = useSelector((state: RootState) => state.findings);
  const resourceInfoList = useSelector((state: RootState) => state.resource);
  const calculateWeight = createWeightCalculator(resourceInfoList);
  return (
    <>
      <Button onClick={handleAddToStorage}>저장고에 추가</Button>
      <div>총 무게: {calculateWeight(findings)}</div>
      <Table className={styles.findings}>
        <thead>
          <tr>
            <th>이름</th>
            <th>수량</th>
            <th>무게</th>
            <th>가치</th>
            <th>여분</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(findings).map((resource) => (
            <FindingsRow
              key={resource}
              resource={resource as ResourceName}
              pageName="findings"
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

function createWeightCalculator(resourceInfoList: ResourceInfoList) {
  return (inventory: ResourceInventory) => {
    return Object.keys(inventory).reduce(
      (acc, resourceName) =>
        (acc +=
          inventory[resourceName as ResourceName] *
          resourceInfoList[resourceName as ResourceName].weight),
      0
    );
  };
}
