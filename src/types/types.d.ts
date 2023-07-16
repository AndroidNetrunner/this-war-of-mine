export type color =
  | "green"
  | "gray"
  | "red"
  | "blue"
  | "brown"
  | "yellow"
  | "white";

interface ResourceInfo {
  english: string;
  korean: string;
  color: color;
  maxQuantity: number;
  value: number;
  weight: number;
  className: string;
}

export interface ResourceInfoList {
  wood: ResourceInfo;
  component: ResourceInfo;
  water: ResourceInfo;
  alcheol: ResourceInfo;
  moonshine: ResourceInfo;
  cigarette: ResourceInfo;
  sugar: ResourceInfo;
  coffee: ResourceInfo;
  vegetable: ResourceInfo;
  rawFood: ResourceInfo;
  cannedFood: ResourceInfo;
  shovel: ResourceInfo;
  sawblade: ResourceInfo;
  lockpick: ResourceInfo;
  filter: ResourceInfo;
  mechanicalPart: ResourceInfo;
  electricalPart: ResourceInfo;
  jewelry: ResourceInfo;
  book: ResourceInfo;
  brokenGuitar: ResourceInfo;
  guitar: ResourceInfo;
  weaponPart: ResourceInfo;
  brokenPistol: ResourceInfo;
  pistol: ResourceInfo;
  knife: ResourceInfo;
  shell: ResourceInfo;
  brokenAssaultRifle: ResourceInfo;
  assaultRifle: ResourceInfo;
  hatchet: ResourceInfo;
  ammo: ResourceInfo;
  brokenShotgun: ResourceInfo;
  shotgun: ResourceInfo;
  herb: ResourceInfo;
  chems: ResourceInfo;
  herbalMeds: ResourceInfo;
  meds: ResourceInfo;
  bandages: ResourceInfo;
}

export type ResourceName = keyof ResourceInfoList;

export type ResourceInventory = {
  [key in ResourceName]: number;
};
