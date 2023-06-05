import { createSlice } from "@reduxjs/toolkit";
import { makeResourceObject } from "../utils";
const initialState = {
  wood: makeResourceObject("WOOD", "목재", "brown", 50, -1, 1),
  component: makeResourceObject("COMPONENT", "잡동사니", "white", 50, -1, 1),
  water: makeResourceObject("WATER", "물", "blue", 6, -1, 1),
  alcheol: makeResourceObject("100% ALCHEOL", "100% 알코올", "green", 3, 10, 1),
  moonshine: makeResourceObject("MOONSHINE", "밀주", "green", 3, 3, 1),
  cigarette: makeResourceObject("CIGARETTE", "담배", "green", 6, 1, 0),
  sugar: makeResourceObject("SUGAR", "설탕", "green", 3, 3, 1),
  coffee: makeResourceObject("COFFEE", "커피", "green", 4, 1, 0),
  vegetable: makeResourceObject("VEGETABLE", "채소", "green", 9, 5, 0),
  rawFood: makeResourceObject("RAW FOOD", "날고기", "green", 6, 10, 1),
  cannedFood: makeResourceObject("CANNED FOOD", "통조림", "green", 3, 15, 1),
  shovel: makeResourceObject("SHOVEL", "삽", "gray", 2, 6, 1),
  lockpick: makeResourceObject("LOCKPICK", "자물쇠따개", "gray", 2, 5, 0),
  filter: makeResourceObject("FILTER", "필터", "gray", 3, 1, 1),
  mechanicalPart: makeResourceObject(
    "MECHANICAL PART",
    "기계부품",
    "gray",
    4,
    2,
    1
  ),
  electricalPart: makeResourceObject(
    "ELECTRICAL PART",
    "전기부품",
    "gray",
    4,
    3,
    1
  ),
  jewelry: makeResourceObject("JEWELRY", "귀금속", "gray", 2, 10, 0),
  book: makeResourceObject("BOOK", "책", "gray", 3, 1, 0),
  brokenGuitar: makeResourceObject(
    "BROKEN GUITAR",
    "망가진 기타",
    "gray",
    1,
    3,
    1
  ),
  guitar: makeResourceObject("GUITAR", "기타", "gray", 1, 10, 2),
  weaponPart: makeResourceObject("WEAPON PART", "무기부품", "red", 4, 2, 1),
  brokenPistol: makeResourceObject(
    "BROKEN PISTOL",
    "망가진 권총",
    "red",
    1,
    5,
    1
  ),
  pistol: makeResourceObject("PISTOL", "권총", "red", 2, 16, 1),
  knife: makeResourceObject("KNIFE", "칼", "red", 3, 8, 1),
  shell: makeResourceObject("SHELL", "탄피", "red", 1, 1, 0),
  brokenAssaultRifle: makeResourceObject(
    "BROKEN ASSAULT RIFLE",
    "망가진 돌격소총",
    "red",
    1,
    8,
    2
  ),
  assaultRifle: makeResourceObject(
    "ASSAULT RIFLE",
    "돌격소총",
    "red",
    2,
    20,
    2
  ),
  hatchet: makeResourceObject("HATCHET", "도끼", "red", 2, 12, 1),
  ammo: makeResourceObject("AMMO", "탄약", "red", 9, 3, 0),
  brokenShotgun: makeResourceObject(
    "BROKEN SHOTGUN",
    "망가진 산탄총",
    "red",
    1,
    2,
    8
  ),
  shotgun: makeResourceObject("SHOTGUN", "산탄총", "red", 2, 20, 2),
  herb: makeResourceObject("HERB", "허브", "yellow", 3, 1, 0),
  chems: makeResourceObject("CHEMS", "화공약품", "yellow", 6, 1, 0),
  herbalMeds: makeResourceObject("HERBAL MEDS", "허브약", "yellow", 3, 10, 0),
  meds: makeResourceObject("MEDS", "의약품", "yellow", 3, 10, 0),
  bandages: makeResourceObject("BANDAGES", "붕대", "yellow", 3, 10, 0),
};

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    raiseValue: (
      state,
      {
        payload: { resource, modifier },
      }: { payload: { resource: keyof typeof initialState; modifier: number } }
    ) => {
      state[resource].value += modifier;
    },
    lowerValue: (
      state,
      {
        payload: { resource, modifier },
      }: { payload: { resource: keyof typeof initialState; modifier: number } }
    ) => {
      state[resource].value -= modifier;
    },
    remove: (
      state,
      {
        payload: { resource, modifier },
      }: {
        payload: { resource: keyof typeof initialState; modifier: number };
      }
    ) => {
      state[resource].maxQuantity -= modifier;
    },
    restore: (
      state,
      {
        payload: { resource, modifier },
      }: {
        payload: { resource: keyof typeof initialState; modifier: number };
      }
    ) => {
      state[resource].maxQuantity += modifier;
    },
    initialize: (state, action) => {
      return action.payload;
    },
  },
});

export const { raiseValue, lowerValue, initialize } = resourceSlice.actions;
export default resourceSlice.reducer;
export type ResourceName = keyof typeof initialState;
