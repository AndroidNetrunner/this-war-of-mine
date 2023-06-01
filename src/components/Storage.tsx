import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import styles from "./styles/Storage.module.css";
import { RootState } from "../redux/store";
import ResourceRow from "./ResourceRow";
import { ResourceName } from "../redux/slices/resourceSlice";

export default function Storage() {
  const storage = useSelector((state: RootState) => state.resource);
  return (
    <Table className={styles.storage}>
      <thead>
        <tr>
          <th>이름</th>
          <th>수량</th>
          <th>가치</th>
          <th>여분</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(storage).map((resource) => (
          <ResourceRow key={resource.english} resourceName={resource.english} />
        ))}
      </tbody>
    </Table>
  );
}
