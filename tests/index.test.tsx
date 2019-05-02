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
    it("should render columns squared amount of cells when given a columns prop", () => {
      const board = mount(<Board columns={3} />);
      expect(board.find(Cell).length).toEqual(9);
    });
  });
});

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
