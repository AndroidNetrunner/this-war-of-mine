import { createSlice } from "@reduxjs/toolkit";
import { ResourceInventory, ResourceName } from "../../types/types";

const initialState: ResourceInventory = {
  wood: 0,
  component: 0,
  water: 0,
  alcheol: 0,
  moonshine: 0,
  cigarette: 0,
  sugar: 0,
  coffee: 0,
  vegetable: 0,
  rawFood: 0,
  cannedFood: 0,
  shovel: 0,
  lockpick: 0,
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

const findingsSlice = createSlice({
  name: "findings",
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
    reset: (state) => {
      return { ...initialState };
    },
    update: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, discard, reset, update } = findingsSlice.actions;
export default findingsSlice.reducer;
