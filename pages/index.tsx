import * as React from "react";
import Board from "../components/Board";

export default function Index() {
  const cells = [
    [{value: null, onClick: noop}, {value: 'O', onClick: noop}, {value: 'O', onClick: noop}],
    [{value: 'X', onClick: noop}, {value: 'O', onClick: noop}, {value: 'O', onClick: noop}],
    [{value: 'X', onClick: noop}, {value: 'O', onClick: noop}, {value: 'O', onClick: noop}],
  ];

  return (
    <>
      <h1>Tic Tac Toe Next Generation</h1>
      <Board cells={cells} />
    </>
  );
}

function noop() {};
