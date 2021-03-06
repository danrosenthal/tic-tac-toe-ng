import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function() {
      const wrap = mount(<Index />);
      expect(wrap.find("p").text()).toBe("Hellow world");
    });
  });
});
