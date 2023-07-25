import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./styles/ControlButton.module.css";

export default function ControlButton({
  disabled,
  onClick,
  data,
}: {
  disabled: {
    plus: boolean;
    minus: boolean;
  };
  onClick: {
    plus: Function;
    minus: Function;
  };
  data: number | string;
}) {
  return (
    <>
      <Button
        variant="success"
        disabled={disabled.plus}
        onClick={onClick.plus()}
      >
        +
      </Button>
      {data}
      <Button
        variant="danger"
        disabled={disabled.minus}
        onClick={onClick.minus()}
      >
        -
      </Button>
    </>
  );
}
