import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getStuffInDemand, getStuffOnSale } from "../utils/tradingUtils";

export const useMyselfResourceList = (tradingPlace: string) => {
  const storage = useSelector((state: RootState) => state.storage);
  const findings = useSelector((state: RootState) => state.findings);
  const resourceInfoList = useSelector((state: RootState) => state.resource);

  return useMemo(() => {
    return getStuffInDemand(
      tradingPlace === "outside" ? findings : storage,
      resourceInfoList
    );
  }, [tradingPlace, storage, findings, resourceInfoList]);
};

export const useOpponentResourceList = () => {
  const storage = useSelector((state: RootState) => state.storage);
  const findings = useSelector((state: RootState) => state.findings);
  const resourceInfoList = useSelector((state: RootState) => state.resource);

  return useMemo(() => {
    return getStuffOnSale(storage, findings, resourceInfoList);
  }, [storage, findings, resourceInfoList]);
};
