import * as React from "react";
import ReactTestRenderer from "react-test-renderer";
import Home from ".";

it("renders as expected", () => {
  const container = ReactTestRenderer.create(<Home />);

  expect(container).toMatchSnapshot();
});
