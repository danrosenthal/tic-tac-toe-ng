import * as React from 'react';
import Board from './components/Board';

export default class Index extends React.PureComponent<{}, never> {

  render() {
    return (
      <>
        <h1>Tic Tac Toe Next Generation</h1>
        <Board />
      </>
    );
  }
}
