import PieChartCard, { PieChartCardProps } from ".";
import { act, render } from "@testing-library/react";

import React from "react";
import { ThemeProvider } from "react-jss";
import theme from "../../style/globalStyle";

describe("PieChartCard", () => {
  let props: PieChartCardProps;
  const data = [
    {
      label: "Production",
      data: 81,
    },
    {
      label: "Interne",
      data: 10,
    },
    {
      label: "Commercial",
      data: 6,
    },
    {
      label: "Veille techno",
      data: 3,
    },
  ];

  beforeEach(() => {
    props = {
      data: data,
      label: "Test label",
    };
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("render()", () => {
    it("renders a medium piechart card", async () => {
      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
        jest.advanceTimersByTime(3000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartLabel-0-2-2 chartLabel-d0-0-2-12"
        >
          Test label
        </div>
        <div
          class="chartContainer-0-2-3"
        >
          <canvas
            height="150"
            width="300"
          />
        </div>
      </div>
      `);
    });

    it("renders a small piechart card", async () => {
      props.size = "small";

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
        jest.advanceTimersByTime(3000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartLabel-0-2-2 chartLabel-d3-0-2-15"
        >
          Test label
        </div>
        <div
          class="chartContainer-0-2-3"
        >
          <canvas
            height="150"
            width="300"
          />
        </div>
      </div>
      `);
    });

    it("renders a large piechart card", async () => {
      props.size = "large";

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
        jest.advanceTimersByTime(3000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartLabel-0-2-2 chartLabel-d6-0-2-18"
        >
          Test label
        </div>
        <div
          class="chartContainer-0-2-3"
        >
          <canvas
            height="150"
            width="300"
          />
        </div>
      </div>
      `);
    });

    it("renders piechart card loading display", async () => {
      props.loading = true;

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
        <div
          class="root-0-2-1"
        >
          <div
            class="chartLabel-0-2-2 chartLabel-d12-0-2-24 skeletonAnimation-0-2-5 chartLabelSkeleton-0-2-6 chartLabelSkeleton-d13-0-2-25"
          />
          <div
            class="chartContainer-0-2-3 chardContainerSkeleton-0-2-4"
          >
            <div
              class="chartSkeleton-0-2-7 "
              style="width: 0px; height: 0px;"
            >
              <div
                class="skeletonAnimation-0-2-5 firstChartMask-0-2-8"
              />
              <div
                class="secondChartMask-0-2-9"
                style="width: 0px; height: 0px; top: 0px; left: 0px;"
              />
            </div>
          </div>
        </div>
      `);
    });

    it("renders medium piechart card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "medium";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartContainer-0-2-3 chardContainerSkeleton-0-2-4"
        >
          <div
            class="chartErrorSubContainer-0-2-11"
          >
            <svg
              class="errorIcon-0-2-10 errorIcon-d20-0-2-32"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="184"
                cy="232"
                r="24"
              />
              <path
                d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"
              />
              <circle
                cx="328"
                cy="232"
                r="24"
              />
              <circle
                cx="256"
                cy="256"
                fill="none"
                r="208"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <div>
              Une erreur est survenue
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders large piechart card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "large";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartContainer-0-2-3 chardContainerSkeleton-0-2-4"
        >
          <div
            class="chartErrorSubContainer-0-2-11"
          >
            <svg
              class="errorIcon-0-2-10 errorIcon-d26-0-2-38"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="184"
                cy="232"
                r="24"
              />
              <path
                d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"
              />
              <circle
                cx="328"
                cy="232"
                r="24"
              />
              <circle
                cx="256"
                cy="256"
                fill="none"
                r="208"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <div>
              Une erreur est survenue
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders small piechart card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "small";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartContainer-0-2-3 chardContainerSkeleton-0-2-4"
        >
          <div
            class="chartErrorSubContainer-0-2-11"
          >
            <svg
              class="errorIcon-0-2-10 errorIcon-d32-0-2-44"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="184"
                cy="232"
                r="24"
              />
              <path
                d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"
              />
              <circle
                cx="328"
                cy="232"
                r="24"
              />
              <circle
                cx="256"
                cy="256"
                fill="none"
                r="208"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <div>
              Une erreur est survenue
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders piechart card error display with custom error label", async () => {
      props.loading = false;
      props.error = true;
      props.errorLabel = "Test error label";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <PieChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartContainer-0-2-3 chardContainerSkeleton-0-2-4"
        >
          <div
            class="chartErrorSubContainer-0-2-11"
          >
            <svg
              class="errorIcon-0-2-10 errorIcon-d38-0-2-50"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="184"
                cy="232"
                r="24"
              />
              <path
                d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"
              />
              <circle
                cx="328"
                cy="232"
                r="24"
              />
              <circle
                cx="256"
                cy="256"
                fill="none"
                r="208"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <div>
              Test error label
            </div>
          </div>
        </div>
      </div>
      `);
    });
  });
});
