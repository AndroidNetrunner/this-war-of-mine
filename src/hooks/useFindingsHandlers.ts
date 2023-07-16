import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/slices/storageSlice";
import { reset } from "../redux/slices/findingsSlice";
import { RootState } from "../redux/store";
import { ResourceInventory, ResourceName } from "../types/types";

function useFindingsHandlers() {
  const dispatch = useDispatch();
  const findings = useSelector((state: RootState) => state.findings);
  const storage = useSelector((state: RootState) => state.storage);

  const handleAddToStorage = () => {
    dispatch(update(addFindingsToNewStorage(findings, storage)));
    dispatch(reset());
  };

  return {
    handleAddToStorage,
  };
}

function addFindingsToNewStorage(
  findings: ResourceInventory,
  storage: ResourceInventory
) {
  return Object.keys(findings).reduce(
    (newStorage, resourceName) => {
      const resource = resourceName as ResourceName;
      newStorage[resource] = (storage[resource] || 0) + findings[resource];
      return newStorage;
    },
    { ...storage }
  );
}

export default useFindingsHandlers;
