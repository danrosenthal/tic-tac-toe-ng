import * as React from "react";

export interface Props {
  value: string | null;
  onClick(): void;
}

export default function Cell({
  value,
  onClick
}: Props) {
  return value ? <div>{value}</div> : <button onClick={onClick}>{value}</button>;
}
