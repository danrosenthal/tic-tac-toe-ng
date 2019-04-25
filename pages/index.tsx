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

/*

<Board cells onClick />
<Cell value id onClick/>

*/

/*
  initializer returns cells data structure given a dimension
  cells for dimension three would give a 2d array
  containing three arrays with length three
  
  const cells = [
    [{value: null, id: 1}, {value: null, id: 2}, {value: null, id: 3}],
    [{value: null, id: 4}, {value: null, id: 5}, {value: null, id: 6}],
    [{value: null, id: 7}, {value: null, id: 8}, {value: null, id: 9}],
  ]

  <Board cells={cells} />
*/
