import * as React from "react";
import Board from "../components/Board";

export default function Index() {
  const cells = [
    [{ value: 'X' }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }]
  ];

  const handleClick = (x: number, y: number) => {
    console.log({ x, y });
  };

  return (
    <>
      <h1>Tic Tac Toe Next Generation</h1>
      <Board onClick={handleClick} cells={cells} />
    </>
  );
}
