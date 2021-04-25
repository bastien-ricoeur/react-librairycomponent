import ProgressBar, { ProgressBarProps } from ".";
import { act, render } from "@testing-library/react";

import React from "react";

describe("ProgressBar", () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      completed: 90,
    };
  });

  describe("render()", () => {
    it("renders a progress bar", async () => {
      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBar {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="filler-0-2-2 filler-d0-0-2-4"
        >
          <span
            class="label-0-2-3"
          >
            90%
          </span>
        </div>
      </div>
      `);
    });

    it("renders a error message (completed > 100)", () => {
      props.completed = 101;

      const { container } = render(<ProgressBar {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(
        `Une erreur est survenue`
      );
    });
  });
});
