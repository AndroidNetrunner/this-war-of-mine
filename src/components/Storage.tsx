import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import styles from "./styles/Storage.module.css";
import { RootState } from "../redux/store";
import StorageRow from "./ResourceRow";
import { ResourceName } from "../types/types";
import TableHeader from "./TableHeader";

export default function Storage() {
  const resource = useSelector((state: RootState) => state.resource);
  return (
    <Table className={styles.storage}>
      <TableHeader />
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
