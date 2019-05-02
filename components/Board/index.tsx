import * as React from "react";

import Cell from '../Cell/index';

export interface Props {
  columns: number;
}

export default function Board({columns}: Props) {
  const numOfCells = columns * columns;

  const cellMarkup = Array(numOfCells).fill(<Cell />);
  return <div>{cellMarkup}</div>;
}