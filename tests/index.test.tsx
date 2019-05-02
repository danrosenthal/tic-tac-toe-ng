import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";
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
    - <Cell value onClick/>: value === null ? <button /> : <div />

  function initialize(dimension: number)
    if dimension === 3 👇

    return [
      [{value: ''}, {value: ''}, {value: ''}],
      [{value: ''}, {value: ''}, {value: ''}],
      [{value: ''}, {value: ''}, {value: ''}],
    ]
*/
