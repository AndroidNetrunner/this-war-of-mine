import React from "react";
import Form from "react-bootstrap/Form";

export default function TradingPlaceForm({
  tradingPlace,
  handleTradingPlaceChange,
}: {
  tradingPlace: "outside" | "shelter";
  handleTradingPlaceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Form>
      <Form.Check
        value="shelter"
        label="피난처"
        checked={tradingPlace === "shelter"}
        onChange={handleTradingPlaceChange}
      />
      <Form.Check
        value="outside"
        label="수집 지역"
        checked={tradingPlace === "outside"}
        onChange={handleTradingPlaceChange}
      />
    </Form>
  );
}
