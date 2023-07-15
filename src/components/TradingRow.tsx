import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { add, discard } from "../redux/slices/tradingSlice";
import Button from "react-bootstrap/Button";
import { ResourceName } from "../types/types";
import styles from "./styles/TradingRow.module.css";

export default function TradingRow({
  resource,
  placeName,
}: {
  resource: ResourceName;
  placeName: "shelter" | "outside";
}) {
  const { korean, value, maxQuantity } = useSelector(
    (state: RootState) => state.resource[resource]
  );
  const storage = useSelector((state: RootState) => state.storage[resource]);
  const findings = useSelector((state: RootState) => state.findings[resource]);
  const dispatch = useDispatch();
  const possession = placeName === "shelter" ? storage : findings;
  const inventory = maxQuantity - storage - findings;
  const { myself, opponent } = useSelector((state: RootState) => state.trading);
  const selling = myself[resource];
  const buying = opponent[resource];
  return (
    <tr className={styles.resource}>
      <td className={possession ? "" : styles.zero}>{possession}</td>
      <td>
        <Button
          variant="success"
          onClick={() => {
            dispatch(
              add({
                person: "myself",
                resource,
              })
            );
          }}
          disabled={possession <= selling || value < 0}
        >
          +
        </Button>
        {selling}
        <Button
          variant="danger"
          onClick={() => {
            dispatch(
              discard({
                person: "myself",
                resource,
              })
            );
          }}
          disabled={!selling || value < 0}
        >
          -
        </Button>
      </td>
      <td>{korean}</td>
      <td>{value >= 0 ? `$${value}` : `거래 불가`}</td>
      <td>
        <Button
          variant="success"
          onClick={() => {
            dispatch(
              add({
                person: "opponent",
                resource,
              })
            );
          }}
          disabled={buying >= inventory || value < 0}
        >
          +
        </Button>
        {buying}
        <Button
          variant="danger"
          onClick={() => {
            dispatch(
              discard({
                person: "opponent",
                resource,
              })
            );
          }}
          disabled={!buying || value < 0}
        >
          -
        </Button>
      </td>
      <td className={inventory ? "" : styles.zero}>{inventory}</td>
    </tr>
  );
}
