import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import styles from "./styles/Storage.module.css";
import { RootState } from "../redux/store";
import StorageRow from "./ResourceRow";
import { ResourceName } from "../redux/slices/resourceSlice";

export default function Storage() {
  const resource = useSelector((state: RootState) => state.resource);
  return (
    // 각 버튼을 가운데 정렬, 버튼이 열에 같은 곳에 있도록 하기
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
        {Object.keys(resource).map((resource) => (
          <StorageRow
            key={resource}
            resource={resource as ResourceName}
            pageName="storage"
          />
        ))}
      </tbody>
    </Table>
  );
}
