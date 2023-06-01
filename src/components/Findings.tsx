import React from "react";
import { Table } from "react-bootstrap";
import styles from "./styles/Findings.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Findings() {
  const storage = useSelector((state: RootState) => state.storage);
  return (
    <Table className={styles.findings}>
      <thead>
        <tr>
          <th>이름</th>
          <th>수량</th>
          <th>여분</th>
          <th>가치</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
}
