import { createSlice } from "@reduxjs/toolkit";
import Resource from "../../classes/Resource";
import { color } from "../../utils";

function makeResourceObject(
  english: string,
  korean: string,
  color: color,
  currentQuantity: number,
  maxQuantity: number,
  value: number,
  weight: number
) {
  return {
    english,
    korean,
    color,
    currentQuantity,
    maxQuantity,
    value,
    weight,
    className: english.toLowerCase(),
  };
}

const initialState = {
  wood: makeResourceObject("WOOD", "목재", "brown", 4, 50, -1, 1),
  component: makeResourceObject("COMPONENT", "잡동사니", "white", 2, 50, -1, 1),
  water: makeResourceObject("WATER", "물", "blue", 0, 6, -1, 1),
  alcheol: makeResourceObject(
    "100% ALCHEOL",
    "100% 알코올",
    "green",
    0,
    3,
    10,
    1
  ),
  moonshine: makeResourceObject("MOONSHINE", "밀주", "green", 0, 3, 3, 1),
  cigarette: makeResourceObject("CIGARETTE", "담배", "green", 0, 6, 1, 0),
  sugar: makeResourceObject("SUGAR", "설탕", "green", 0, 3, 3, 1),
  coffee: makeResourceObject("COFFEE", "커피", "green", 0, 4, 1, 0),
  vegetable: makeResourceObject("VEGETABLE", "채소", "green", 0, 9, 5, 0),
  rawFood: makeResourceObject("RAW FOOD", "날고기", "green", 3, 6, 10, 1),
  cannedFood: makeResourceObject("CANNED FOOD", "통조림", "green", 0, 3, 15, 1),
  shovel: makeResourceObject("SHOVEL", "삽", "gray", 1, 2, 6, 1),
  lockpick: makeResourceObject("LOCKPICK", "자물쇠따개", "gray", 1, 2, 5, 0),
  filter: makeResourceObject("FILTER", "필터", "gray", 0, 3, 1, 1),
  mechanicalPart: makeResourceObject(
    "MECHANICAL PART",
    "기계부품",
    "gray",
    0,
    4,
    2,
    1
  ),
  electricalPart: makeResourceObject(
    "ELECTRICAL PART",
    "전기부품",
    "gray",
    0,
    4,
    3,
    1
  ),
  jewelry: makeResourceObject("JEWELRY", "귀금속", "gray", 0, 2, 10, 0),
  book: makeResourceObject("BOOK", "책", "gray", 0, 3, 1, 0),
  brokenGuitar: makeResourceObject(
    "BROKEN GUITAR",
    "망가진 기타",
    "gray",
    0,
    1,
    3,
    1
  ),
  guitar: makeResourceObject("GUITAR", "기타", "gray", 0, 1, 10, 2),
  weaponPart: makeResourceObject("WEAPON PART", "무기부품", "red", 0, 4, 2, 1),
  brokenPistol: makeResourceObject(
    "BROKEN PISTOL",
    "망가진 권총",
    "red",
    0,
    1,
    5,
    1
  ),
  pistol: makeResourceObject("PISTOL", "권총", "red", 0, 2, 16, 1),
  knife: makeResourceObject("KNIFE", "칼", "red", 0, 3, 8, 1),
  shell: makeResourceObject("SHELL", "탄피", "red", 0, 1, 1, 0),
  brokenAssaultRifle: makeResourceObject(
    "BROKEN ASSAULT RIFLE",
    "망가진 돌격소총",
    "red",
    0,
    1,
    8,
    2
  ),
  assaultRifle: makeResourceObject(
    "ASSAULT RIFLE",
    "돌격소총",
    "red",
    0,
    2,
    20,
    2
  ),
  hatchet: makeResourceObject("HATCHET", "도끼", "red", 0, 2, 12, 1),
  ammo: makeResourceObject("AMMO", "탄약", "red", 0, 9, 3, 0),
  brokenShotgun: makeResourceObject(
    "BROKEN SHOTGUN",
    "망가진 산탄총",
    "red",
    0,
    1,
    2,
    8
  ),
  shotgun: makeResourceObject("SHOTGUN", "산탄총", "red", 0, 2, 20, 2),
  herb: makeResourceObject("HERB", "허브", "yellow", 0, 3, 1, 0),
  chems: makeResourceObject("CHEMS", "화공약품", "yellow", 0, 6, 1, 0),
  herbalMeds: makeResourceObject(
    "HERBAL MEDS",
    "허브약",
    "yellow",
    0,
    3,
    10,
    0
  ),
  bandages: makeResourceObject("BANDAGES", "붕대", "yellow", 0, 3, 10, 0),
};

const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    add: (
      state,
      {
        payload: { resource, quantity },
      }: { payload: { resource: keyof typeof initialState; quantity: number } }
    ) => {
      state[resource].currentQuantity += quantity;
    },
    discard: (
      state,
      {
        payload: { resource, quantity },
      }: { payload: { resource: keyof typeof initialState; quantity: number } }
    ) => {
      state[resource].currentQuantity -= quantity;
    },
  },
});

export const { add, discard } = storageSlice.actions;
export default storageSlice.reducer;
export type ResourceName = keyof typeof initialState;
