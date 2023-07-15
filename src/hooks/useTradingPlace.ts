import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slices/tradingSlice";

export default function useTradingPlace() {
  const [tradingPlace, setTradingPlace] = useState<"outside" | "shelter">(
    "outside"
  );
  const dispatch = useDispatch();

  const handleTradingPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTradingPlace(e.target.value as "outside" | "shelter");
    dispatch(reset());
  };

  return { tradingPlace, handleTradingPlaceChange };
}
