import { createSlice } from "@reduxjs/toolkit";
import { ResourceStatus, ResourceName } from "../../types/types";

const initialState: { myself: ResourceStatus; opponent: ResourceStatus } = {
  myself: {
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
  },
  opponent: {
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
  },
};

const tradingSlice = createSlice({
  name: "trading",
  initialState,
  reducers: {
    reset: (state) => initialState,
    add: (
      state,
      {
        payload,
      }: {
        payload: {
          person: "myself" | "opponent";
          resource: ResourceName;
        };
      }
    ) => {
      state[payload.person][payload.resource] =
        state[payload.person][payload.resource] || 0 + 1;
    },
    discard: (
      state,
      {
        payload,
      }: {
        payload: {
          person: "myself" | "opponent";
          resource: ResourceName;
        };
      }
    ) => {
      state[payload.person][payload.resource] =
        state[payload.person][payload.resource] || 0 - 1;
    },
  },
});

export const { reset, add, discard } = tradingSlice.actions;
export default tradingSlice.reducer;
