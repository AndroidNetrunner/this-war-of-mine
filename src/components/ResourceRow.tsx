import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/ResourceRow.module.css";
import { RootState } from "../redux/store";
import { ResourceName } from "../redux/slices/resourceSlice";
import {
  add as addFindings,
  discard as discardFindings,
} from "../redux/slices/findingsSlice";
import {
  add as addStorage,
  discard as discardStorage,
} from "../redux/slices/storageSlice";

export default function ResourceRow({
  resource,
  pageName,
}: {
  resource: ResourceName;
  pageName: "storage" | "findings";
}) {
  const storageQuantity = useSelector(
    (state: RootState) => state.storage[resource]
  );
  const findingsQuantity = useSelector(
    (state: RootState) => state.findings[resource]
  );
  const currentQuantity =
    pageName === "storage" ? storageQuantity : findingsQuantity;
  const add = pageName === "storage" ? addStorage : addFindings;
  const discard = pageName === "storage" ? discardStorage : discardFindings;
  const { className, korean, maxQuantity, value, color } = useSelector(
    (state: RootState) => state.resource[resource]
  );
  const inventory = maxQuantity - (storageQuantity + findingsQuantity);
  const dispatch = useDispatch();
  return (
    <tr className={styles[className] + " " + styles[color]}>
      <td>{korean}</td>
      <td className={!currentQuantity ? styles.zero : ""}>
        <Button
          variant="success"
          disabled={!inventory}
          onClick={() => dispatch(add({ resource: resource, quantity: 1 }))}
        >
          +
        </Button>
        {currentQuantity}
        <Button
          variant="danger"
          disabled={!currentQuantity}
          onClick={() => dispatch(discard({ resource: resource, quantity: 1 }))}
        >
          -
        </Button>
      </td>
      <td>{value !== -1 ? value : "거래 불가(-1)"}</td>
      <td className={!inventory ? styles.zero : ""}>{inventory}</td>
    </tr>
  );
}
