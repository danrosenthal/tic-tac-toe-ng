import * as React from "react";
import styles from './Cell.scss';

export default function Cell() {
  const cellStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return <div className={styles.Cell} style={cellStyles}>Cell</div>;
}
