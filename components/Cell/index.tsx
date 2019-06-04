import * as React from "react";

export interface Props {
  value: string | null;
  onClick(): void;
}

export default function Cell({ value, onClick }: Props) {
  const style: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "1px solid black",
  };
  return value ? (
    <div style={style}>{value}</div>
  ) : (
    <button style={style} onClick={onClick}>
      -
    </button>
  );
}
