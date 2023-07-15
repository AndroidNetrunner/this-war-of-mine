import React, { useState, useMemo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./styles/Trading.module.css";
import { AppDispatch } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import TradingTable from "./TradingTable";
import {
  ResourceInfoList,
  ResourceInventory,
  ResourceName,
} from "../types/types";
import useTradingPlace from "../hooks/useTradingPlace";
import {
  add as addStorage,
  discard as discardStorage,
} from "../redux/slices/storageSlice";
import {
  add as addFindings,
  discard as discardFindings,
} from "../redux/slices/findingsSlice";
import { reset } from "../redux/slices/tradingSlice";

const INITIAL_COMMISION = 0;

export default function Trading() {
  const { tradingPlace, handleTradingPlaceChange } = useTradingPlace();
  const [comission, setComission] = useState(INITIAL_COMMISION);
  const storage = useSelector((state: RootState) => state.storage);
  const findings = useSelector((state: RootState) => state.findings);
  const resourceInfoList = useSelector((state: RootState) => state.resource);
  const { myself, opponent } = useSelector((state: RootState) => state.trading);
  const dispatch = useDispatch();

  const incrementComission = () => setComission((prev) => prev + 1);
  const decrementComission = () => {
    if (comission > 0) setComission((prev) => prev - 1);
  };

  return (
    <>
      <h1>
        거래 수수료:{" "}
        <Button
          variant="success"
          className={styles.plus}
          onClick={incrementComission}
        >
          +
        </Button>
        {comission}
        <Button
          variant="danger"
          className={styles.minus}
          disabled={!comission}
          onClick={decrementComission}
        >
          -
        </Button>
      </h1>
      <Form>
        <Form.Check
          value="shelter"
          label="피난처"
          checked={tradingPlace === "shelter"}
          onChange={handleTradingPlaceChange}
        />
        <Form.Check
          value="outside"
          label="수집 지역"
          checked={tradingPlace === "outside"}
          onChange={handleTradingPlaceChange}
        />
      </Form>
      <Button
        variant="primary"
        onClick={() => {
          makeDeal(myself, opponent, tradingPlace, dispatch);
          dispatch(reset());
        }}
        disabled={!isValidDeal(myself, opponent, comission, resourceInfoList)}
      >
        거래 체결
      </Button>
      <div className={styles.container}>
        <div className={`${styles.flexItem} ${styles.myself}`}>
          <TradingTable
            possession="myself"
            className={styles.myself}
            resourceList={useMemo(
              () =>
                getStuffInDemand(
                  tradingPlace === "outside" ? findings : storage,
                  resourceInfoList
                ),
              [tradingPlace, storage, findings, resourceInfoList]
            )}
          />
        </div>
        <div className={`${styles.flexItem} ${styles.opponent}`}>
          <TradingTable
            possession="opponent"
            className={styles.opponent}
            resourceList={useMemo(
              () => getStuffOnSale(storage, findings, resourceInfoList),
              [storage, findings, resourceInfoList]
            )}
          />
        </div>
      </div>
    </>
  );
}

function isValidDeal(
  myself: ResourceInventory,
  opponent: ResourceInventory,
  comission: number,
  resourceInfoList: ResourceInfoList
) {
  function createValueCalculator(resourceInfoList: ResourceInfoList) {
    return (inventory: ResourceInventory) =>
      Object.keys(inventory).reduce(
        (acc, key) =>
          (acc +=
            inventory[key as ResourceName] *
            resourceInfoList[key as ResourceName].value),
        0
      );
  }
  const calculateValue = createValueCalculator(resourceInfoList);
  return calculateValue(myself) >= calculateValue(opponent) + comission;
}

function makeDeal(
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

function createTrade(
  addAction: Function,
  discardAction: Function,
  dispatch: AppDispatch
) {
  return (myself: ResourceInventory, opponent: ResourceInventory) => {
    executeAction(addAction, opponent, dispatch);
    executeAction(discardAction, myself, dispatch);
  };
}

const executeAction = (
  action: Function,
  person: ResourceInventory,
  dispatch: AppDispatch
) => {
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
};

function getStuffInDemand(
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

function getStuffOnSale(
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
