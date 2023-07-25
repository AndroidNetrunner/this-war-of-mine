import { executeAction } from "../services/tradingServices";
import {
  ResourceInventory,
  ResourceInfoList,
  ResourceName,
} from "../types/types";
import { AppDispatch } from "../redux/store";
import {
  add as addStorage,
  discard as discardStorage,
} from "../redux/slices/storageSlice";
import {
  add as addFindings,
  discard as discardFindings,
} from "../redux/slices/findingsSlice";

export function createValueCalculator(resourceInfoList: ResourceInfoList) {
  return (inventory: ResourceInventory) =>
    Object.keys(inventory).reduce(
      (acc, key) =>
        (acc +=
          inventory[key as ResourceName] *
          resourceInfoList[key as ResourceName].value),
      0
    );
}

export function createTrade(
  addAction: Function,
  discardAction: Function,
  dispatch: AppDispatch
) {
  return (myself: ResourceInventory, opponent: ResourceInventory) => {
    executeAction(addAction, opponent, dispatch);
    executeAction(discardAction, myself, dispatch);
  };
}

export function getStuffInDemand(
  resourceStatus: ResourceInventory,
  infoList: ResourceInfoList
): ResourceInventory {
  return Object.keys(resourceStatus)
    .map((key) => key as ResourceName)
    .filter((resource) => {
      return resourceStatus[resource] > 0 && infoList[resource].value > 0;
    })
    .reduce((acc: ResourceInventory, resource) => {
      acc[resource] = resourceStatus[resource];
      return acc;
    }, {} as ResourceInventory);
}

export function getStuffOnSale(
  storage: ResourceInventory,
  findings: ResourceInventory,
  infoList: ResourceInfoList
): ResourceInventory {
  return Object.keys(storage)
    .map((key) => key as ResourceName)
    .filter((resource) => {
      return (
        infoList[resource].maxQuantity -
          (storage[resource] + findings[resource]) >
          0 && infoList[resource].value > 0
      );
    })
    .reduce((acc: ResourceInventory, resource) => {
      acc[resource] =
        infoList[resource].maxQuantity -
        (storage[resource] + findings[resource]);
      return acc;
    }, {} as ResourceInventory);
}

export function makeDeal(
  myself: ResourceInventory,
  opponent: ResourceInventory,
  tradingPlace: "shelter" | "outside",
  dispatch: AppDispatch
) {
  const tradeInShelter = createTrade(addStorage, discardStorage, dispatch);
  const tradeInOutside = createTrade(addFindings, discardFindings, dispatch);
  if (tradingPlace === "shelter") tradeInShelter(myself, opponent);
  else tradeInOutside(myself, opponent);
}
