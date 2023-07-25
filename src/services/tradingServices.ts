import { ResourceInventory, ResourceName } from "../types/types";
import { AppDispatch } from "../redux/store";

export function executeAction(
  action: Function,
  person: ResourceInventory,
  dispatch: AppDispatch
) {
  Object.keys(person)
    .filter((key) => person[key as ResourceName] > 0)
    .forEach((key) =>
      dispatch(
        action({
          resource: key,
          quantity: person[key as ResourceName],
        })
      )
    );
}
