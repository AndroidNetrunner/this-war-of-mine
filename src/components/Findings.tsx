import React from "react";
import { Button, Table } from "react-bootstrap";
import styles from "./styles/Findings.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import FindingsRow from "./ResourceRow";
import { update } from "../redux/slices/storageSlice";
import { reset } from "../redux/slices/findingsSlice";
import { ResourceName } from "../redux/slices/resourceSlice";
import ResourceList from "../interfaces/ResourceList";
export default function Findings() {
  const findings = useSelector((state: RootState) => state.findings);
  const storage = useSelector((state: RootState) => state.storage);
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          dispatch(update(addFindingsToNewStorage(findings, storage)));
          dispatch(reset());
        }}
      >
        저장고에 추가
      </Button>
      <Table className={styles.findings}>
        <thead>
          <tr>
            <th>이름</th>
            <th>수량</th>
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

function addFindingsToNewStorage(
  findings: ResourceList,
  storage: ResourceList
) {
  const newStorage: ResourceList = { ...storage };
  Object.keys(newStorage).forEach((resource) => {
    newStorage[resource as ResourceName] =
      storage[resource as ResourceName] + findings[resource as ResourceName];
  });
  return newStorage;
}
