import * as React from "react";

import Cell from '../Cell/index';

export interface Cell {
  value: string | null;
  onClick(): void;
}

export interface Props {
  cells: Cell[][];
}

export default function Board({cells}: Props) {

  const cellMarkup = cells.map((matrix, verticalIndex) => {
    return matrix.map((cell, horizontalIndex) => {
      return (<Cell key={`${verticalIndex}, ${horizontalIndex}`} onClick={cell.onClick} value={cell.value} />);
    })
  });

  return <div>{cellMarkup}</div>;
}