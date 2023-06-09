import { render } from "@testing-library/react";

import { CardList } from "./CardList";

export const SOME_CONST = 1;

describe("CardList", () => {
  test("renders the CardList component", () => {
    render(<CardList title="testTitle" />);
  });
});