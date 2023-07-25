import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/ResourceRow.module.css";
import { RootState } from "../redux/store";
import { raiseValue, lowerValue } from "../redux/slices/resourceSlice";
import {
  add as addFindings,
  discard as discardFindings,
} from "../redux/slices/findingsSlice";
import {
  add as addStorage,
  discard as discardStorage,
} from "../redux/slices/storageSlice";
import { ResourceName } from "../types/types";
import ControlButton from "./ControlButton";

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
  const { className, korean, maxQuantity, value, color, weight } = useSelector(
    (state: RootState) => state.resource[resource]
  );
  const inventory = maxQuantity - (storageQuantity + findingsQuantity);
  const dispatch = useDispatch();
  return (
    <tr
      className={
        styles.resourceRow +
        " " +
        styles[className] +
        " " +
        styles[color + "Token"]
      }
    >
      <td>{korean}</td>
      <td className={!currentQuantity ? styles.zero : ""}>
        <div className={styles.flexContainer}>
          <ControlButton
            onClick={{
              plus: () => dispatch(add({ resource, quantity: 1 })),
              minus: () => dispatch(discard({ resource, quantity: 1 })),
            }}
            disabled={{
              plus: !inventory,
              minus: !currentQuantity,
            }}
            data={currentQuantity}
          />
        </div>
      </td>
      <td className={styles.weight}>{weight}</td>
      <td className={styles.value}>
        <div className={styles.flexContainer}>
          <ControlButton
            onClick={{
              plus: () =>
                dispatch(raiseValue({ resource: resource, modifier: 1 })),
              minus: () =>
                dispatch(lowerValue({ resource: resource, modifier: 1 })),
            }}
            disabled={{
              plus: false,
              minus: value < 0,
            }}
            data={value !== -1 ? value : "거래 불가(-1)"}
          />
        </div>
      </td>
      <td className={!inventory ? styles.zero : ""}>{inventory}</td>
    </tr>
  );
}
