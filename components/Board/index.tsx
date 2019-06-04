import * as React from "react";

import Cell from "../Cell/index";

export interface Cell {
  value: string | null;
}

export interface Props {
  cells: Cell[][];
  onClick(x: number, y: number): void;
}

export default function Board({ cells, onClick }: Props) {
  const numberOfCells = cells[0].length;

  const cellMarkup = cells.map((matrix, horizontalIndex) => {
    return matrix.map((cell, verticalIndex) => {
      return (
        <Cell
          key={`${horizontalIndex}, ${verticalIndex}`}
          onClick={() => onClick(horizontalIndex, verticalIndex)}
          value={cell.value}
        />
      );
    });
  });

  return <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${numberOfCells}, 1fr)`,
    gridTemplateRows: `repeat(${numberOfCells}, 1fr)`,
    width: numberOfCells * 100,
    height: numberOfCells * 100,
  }}>{cellMarkup}</div>;
}
