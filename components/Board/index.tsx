import * as React from "react";
import Cell from "../Cell";

export interface Props {
  dimension: number;
}

export default function Board({ dimension }: Props) {
  const numOfCells = dimension * dimension;
  const gridStyles: React.CSSProperties = {
    height: '100%',
    minHeight: `calc(100px * ${dimension})`,
    display: 'grid',
    gridTemplateColumns: `repeat(${dimension}, 100px)`,
    gridTemplateRows: `repeat(${dimension}, 100px)`,
  };
  const cellMarkup = Array.from({length: numOfCells}, (_, i) => <Cell key={i} />);
  return <div style={gridStyles}>{cellMarkup}</div>;
}
