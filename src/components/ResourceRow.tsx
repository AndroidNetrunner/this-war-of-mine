import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/ResourceRow.module.css";
import { RootState } from "../redux/store";
import { ResourceName } from "../redux/slices/resourceSlice";
import { add, discard } from "../redux/slices/storageSlice";

function getResourceKey(
  resourceName: string,
  resourceList: { [x in ResourceName]: { english: string } }
): ResourceName {
  for (let key of Object.keys(resourceList) as ResourceName[]) {
    if (resourceList[key].english === resourceName) return key;
  }
  throw new Error("NO RESOURCE ERROR");
}

export default function ResourceRow({
  resourceName,
}: {
  resourceName: string;
}) {
  const resource = getResourceKey(
    resourceName,
    useSelector((state: RootState) => state.resource)
  );
  const currentQuantity = useSelector(
    (state: RootState) => state.storage[resource]
  );

  const { className, korean, maxQuantity, value, color } = useSelector(
    (state: RootState) => state.resource[resource]
  );
  const remainedQuantity = maxQuantity - currentQuantity;
  const dispatch = useDispatch();
  return (
    <tr className={styles[className] + " " + styles[color]}>
      <td>{korean}</td>
      <td className={!currentQuantity ? styles.zero : ""}>
        <Button
          variant="outline-secondary"
          disabled={!remainedQuantity}
          onClick={() => dispatch(add({ resource: resource, quantity: 1 }))}
        >
          Plus
        </Button>
        {currentQuantity}
        <Button
          variant="outline-secondary"
          disabled={!currentQuantity}
          onClick={() => dispatch(discard({ resource: resource, quantity: 1 }))}
        >
          Minus
        </Button>
      </td>
      <td>{value !== -1 ? value : "거래 불가(-1)"}</td>
      <td className={!remainedQuantity ? styles.zero : ""}>
        {remainedQuantity}
      </td>
    </tr>
  );
}
