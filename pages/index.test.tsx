import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Home from ".";

// import TestRenderer from "react-test-renderer";

// afterEach(cleanup);

it("renders as expected", () => {
  const { container } = render(<Home />); // react-testing-library
  // const container = TestRenderer.create(<Home />); // react-test-renderer

  expect(container).toMatchSnapshot();
});
