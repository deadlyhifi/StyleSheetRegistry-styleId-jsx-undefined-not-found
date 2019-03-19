import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Home from ".";

afterEach(cleanup);

it("renders as expected", () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});
