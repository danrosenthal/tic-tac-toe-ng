import * as React from "react";
import { mount } from "enzyme";
import Index from "../index";
import Board from "../components/Board";

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
});

/*
  - <Index />: Game (stateful and has the game logic)
    - <Board cells onClick />: lays given cells out in grid of Cells
    - <Cell value id onClick/>: value === null ? <button /> : <div />

  function initialize(dimension: number)
    if dimension === 3 👇

    return [
      [{value: null, id: 1}, {value: null, id: 2}, {value: null, id: 3}],
      [{value: null, id: 4}, {value: null, id: 5}, {value: null, id: 6}],
      [{value: null, id: 7}, {value: null, id: 8}, {value: null, id: 9}],
    ]
*/
