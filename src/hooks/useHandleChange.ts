import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slices/tradingSlice";

export default function useHandleChange(initialValue) {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();
  function handleChange(e) {
    setValue(e.target.value);
    dispatch(reset());
  }

  return [value, handleChange];
}
