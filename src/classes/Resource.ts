import { color } from "../utils";

export default class Resource {
  _english: string;
  _korean: string;
  _color: color;
  _currentQuantity: number;
  _maxQuantity: number;
  _value: number;
  _weight: number;
  constructor(
    english: string,
    korean: string,
    color: color,
    initialQuantity: number,
    maxQuantity: number,
    value: number,
    weight: number
  ) {
    this._english = english;
    this._korean = korean;
    this._color = color;
    this._currentQuantity = initialQuantity;
    this._maxQuantity = maxQuantity;
    this._value = value;
    this._weight = weight;
  }
  get english() {
    return this._english.replace("_", " ");
  }
  get className() {
    return this._english.toLowerCase();
  }
  get korean() {
    return this._korean;
  }
  get color() {
    return this._color + "Token";
  }
  get currentQuantity() {
    return this._currentQuantity;
  }
  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }
  get maxQuantity() {
    return this._maxQuantity;
  }

  public canAdd = (quantity: number) => {
    return this._currentQuantity + quantity <= this._maxQuantity;
  };
  public add = (quantity: number) => {
    this._currentQuantity += quantity;
    console.log(this._currentQuantity);
  };
  public canDiscard = (quantity: number) => {
    return this._currentQuantity >= quantity;
  };
  public discard = (quantity: number) => {
    this._currentQuantity -= quantity;
  };
  public remove = (quantity: number) => {
    this._maxQuantity -= quantity;
  };
  public canRemove = (quantity: number) => {
    return this._maxQuantity - this._currentQuantity >= quantity;
  };
}
