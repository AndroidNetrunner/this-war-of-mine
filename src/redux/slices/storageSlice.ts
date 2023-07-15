import { createSlice } from "@reduxjs/toolkit";
import { ResourceInventory, ResourceName } from "../../types/types";

const initialState: ResourceInventory = {
  wood: 4,
  component: 4,
  water: 2,
  alcheol: 0,
  moonshine: 0,
  cigarette: 0,
  sugar: 0,
  coffee: 0,
  vegetable: 0,
  rawFood: 3,
  cannedFood: 0,
  shovel: 1,
  lockpick: 1,
  filter: 0,
  mechanicalPart: 0,
  electricalPart: 0,
  jewelry: 0,
  book: 0,
  brokenGuitar: 0,
  guitar: 0,
  weaponPart: 0,
  brokenPistol: 0,
  pistol: 0,
  knife: 0,
  shell: 0,
  brokenAssaultRifle: 0,
  assaultRifle: 0,
  hatchet: 0,
  ammo: 0,
  brokenShotgun: 0,
  shotgun: 0,
  herb: 0,
  chems: 0,
  herbalMeds: 0,
  meds: 0,
  bandages: 0,
};

const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    add: (
      state,
      {
        payload: { resource, quantity },
      }: { payload: { resource: ResourceName; quantity: number } }
    ) => {
      state[resource] += quantity;
    },
    discard: (
      state,
      {
        payload: { resource, quantity },
      }: { payload: { resource: ResourceName; quantity: number } }
    ) => {
      state[resource] -= quantity;
    },
    update: (
      state,
      {
        payload: newStorage,
      }: {
        payload: ResourceInventory;
      }
    ) => {
      return newStorage;
    },
    initialize: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, discard, update, initialize } = storageSlice.actions;
export default storageSlice.reducer;
