import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";
import { Board, Cell } from "../components/index";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function() {
      expect(mountIndex).not.toThrow();
    });

    it("should render a Board", function() {
      const wrap = mountIndex();
      expect(wrap.find(Board).length).toBe(1);
    });
  });

  describe("Board", () => {
    it("should render the square number of cells of the given dimension", function() {
      const board = mount(<Board dimension={3} />);
      expect(board.find(Cell).length).toBe(9);
    });
  });
});

function mountIndex() {
  return mount(<Index />);
}
