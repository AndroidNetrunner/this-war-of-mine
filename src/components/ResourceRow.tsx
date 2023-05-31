import Resource from "../classes/Resource";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/ResourceRow.module.css";
import { RootState } from "../redux/store";
import { ResourceName } from "../redux/slices/storageSlice";
import { add } from "../redux/slices/storageSlice";

function getResourceState(
  storage: RootState["storage"],
  resourceName: string
): ResourceName {
  return Object.keys(storage).filter(
    (property) => storage[property as ResourceName].english === resourceName
  )[0] as ResourceName;
}

export default function ResourceRow({
  resourceName,
}: {
  resourceName: string;
}) {
  const storage = useSelector((state: RootState) => state.storage);
  const resource = getResourceState(storage, resourceName);
  const { className, korean, maxQuantity, currentQuantity, value, color } =
    storage[resource];
  const remainedQuantity = maxQuantity - currentQuantity;
  const dispatch = useDispatch();
  return (
    <tr className={styles[className] + " " + styles[color]}>
      <td>{korean}</td>
      <td className={!currentQuantity ? styles.zero : ""}>
        {currentQuantity}
        <Button
          variant="outline-secondary"
          onClick={() => dispatch(add({ resource: resource, quantity: 1 }))}
        >
          Plus
        </Button>
      </td>
      <td>{value !== -1 ? value : "거래 불가(-1)"}</td>
      <td className={!remainedQuantity ? styles.zero : ""}>
        {remainedQuantity}
      </td>
    </tr>
  );
  // return <></>;
}
