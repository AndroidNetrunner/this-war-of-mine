import { color } from "../types/types";

export function makeResourceObject(
  english: string,
  korean: string,
  color: color,
  maxQuantity: number,
  value: number,
  weight: number
) {
  return {
    english,
    korean,
    color,
    maxQuantity,
    value,
    weight,
    className: english.toLowerCase(),
  };
}
