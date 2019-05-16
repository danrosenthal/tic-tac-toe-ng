import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";
import Board from "../components/Board";
import Cell from "../components/Cell";


describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function() {
      const wrap = mount(<Index />);
      expect(wrap.find("h1").text()).toBe("Tic Tac Toe Next Generation");
    });

    it("should render a board", function() {
      const wrap = mount(<Index />);
      expect(wrap.find(Board).length).toEqual(1);
    });
  });

  describe("Board", () => {
    it("should render a Cell component for each given cell", () => {
      const cells = [
        [{value: null, onClick: noop}, {value: 'O', onClick: noop}, {value: 'O', onClick: noop}],
        [{value: 'X', onClick: noop}, {value: 'O', onClick: noop}, {value: 'O', onClick: noop}],
        [{value: 'X', onClick: noop}, {value: 'O', onClick: noop}, {value: 'O', onClick: noop}],
      ];

      const board = mount(<Board cells={cells} />);
      expect(board.find(Cell).length).toEqual(9);
    });

    it("should render cells with a given value and click handler", () => {
      const cells = [
        [{value: 'X', onClick: noop}, {value: 'O', onClick: noop}],
        [{value: 'X', onClick: noop}, {value: 'O', onClick: noop}],
      ];

      const board = mount(<Board cells={cells} />);

      expect(board.find(Cell).map((cell) => {
        return cell.props();
      })).toEqual([{value: 'X', onClick: noop}, {value: 'O', onClick: noop}, {value: 'X', onClick: noop}, {value: 'O', onClick: noop}])
    });

  });

  describe("Cell", () => {
    it("should render a button when a null value is given", () => {
      const cell = mount(<Cell value={null} onClick={noop} />);
      expect(cell.find('button').length).toEqual(1);
    });

    it("should call the onClick handler when clicked", () => {
      const spy = jest.fn();
      const cell = mount(<Cell value={null} onClick={spy} />);
      cell.find('button').simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should not call the onClick handler when a value is given", () => {
      const spy = jest.fn();
      const cell = mount(<Cell onClick={spy} value="X" />);
      cell.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    it("should render a div when a value is given", () => {
      const cell = mount(<Cell onClick={noop} value="O" />);
      expect(cell.find('div').length).toEqual(1);
    });

    it("should render an X when given a value of X", () => {
      const cell = mount(<Cell onClick={noop} value="X" />);
      expect(cell.find('div').text()).toEqual('X');
    });
  });
});

function noop() {};

/*
  - <Index />: Game (stateful and has the game logic)
    - <Board cells onClick />: lays given cells out in grid of Cells
    - <Cell value onClick/>: value === null ? <button /> : <div />

  function initialize(dimension: number)
    if dimension === 3 👇

    return [
      [{value: ''}, {value: ''}, {value: ''}],
      [{value: ''}, {value: ''}, {value: ''}],
      [{value: ''}, {value: ''}, {value: ''}],
    ]

    <Board>
      <Cell>
      <Cell>
    </Board>
*/
