import GroupedBarChartCard, { GroupedBarChartCardProps } from ".";
import { act, render } from "@testing-library/react";

import React from "react";
import { ThemeProvider } from "react-jss";
import theme from "../../style/globalStyle";

describe("GroupedBarChartCard", () => {
  let props: GroupedBarChartCardProps;
  const data = [
    {
      label: "Dataset 1",
      data: [12, 19, 3, 5, 2, 3],
    },
    {
      label: "Dataset 2",
      data: [2, 3, 20, 5, 1, 4],
    },
    {
      label: "Dataset 3",
      data: [3, 10, 13, 15, 22, 30],
    },
    {
      label: "Dataset 4",
      data: [8, 1, 3, 15, 22, 9],
    },
  ];

  const groupLabels = ["1", "2", "3", "4", "5", "6"];

  beforeEach(() => {
    props = {
      data: data,
      groupLabels: groupLabels,
      label: "Test label",
    };
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("render()", () => {
    it("renders a medium groupedbarchart card", async () => {
      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
        jest.advanceTimersByTime(3000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartLabel-0-2-2 chartLabel-d0-0-2-11"
        >
          Test label
        </div>
        <div>
          <canvas
            height="150"
            width="300"
          />
        </div>
      </div>
      `);
    });

    it("renders a small groupedbarchart card", async () => {
      props.size = "small";

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
        jest.advanceTimersByTime(3000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartLabel-0-2-2 chartLabel-d3-0-2-14"
        >
          Test label
        </div>
        <div>
          <canvas
            height="150"
            width="300"
          />
        </div>
      </div>
      `);
    });

    it("renders a large groupedbarchart card", async () => {
      props.size = "large";

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
        jest.advanceTimersByTime(3000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chartLabel-0-2-2 chartLabel-d6-0-2-17"
        >
          Test label
        </div>
        <div>
          <canvas
            height="150"
            width="300"
          />
        </div>
      </div>
      `);
    });

    it("renders groupedbarchart card loading display", async () => {
      props.loading = true;

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
        <div
          class="root-0-2-1"
        >
          <div
            class="chartLabel-0-2-2 chartLabel-d12-0-2-23 skeletonAnimation-0-2-3 chartLabelSkeleton-0-2-5 chartLabelSkeleton-d13-0-2-24"
          />
          <div
            class="chardContainerSkeleton-0-2-6 skeletonBorderAnimation-0-2-4"
          >
            <div
              class="chartGroup-0-2-9"
            >
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 40%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 20%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 70%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 49%;"
              />
            </div>
            <div
              class="chartGroup-0-2-9"
            >
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 22%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 78%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 47%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 54%;"
              />
            </div>
            <div
              class="chartGroup-0-2-9"
            >
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 47%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 36%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 22%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 80%;"
              />
            </div>
            <div
              class="chartGroup-0-2-9"
            >
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 18%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 37%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 74%;"
              />
              <div
                class="barChart-0-2-10 skeletonAnimation-0-2-3"
                style="height: 66%;"
              />
            </div>
          </div>
        </div>
      `);
    });

    it("renders medium groupedbarchart card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "medium";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chardContainerSkeleton-0-2-6"
        >
          <div
            class="chartErrorSubContainer-0-2-8"
          >
            <svg
              class="errorIcon-0-2-7 errorIcon-d20-0-2-31"
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

    it("renders large groupedbarchart card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "large";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chardContainerSkeleton-0-2-6"
        >
          <div
            class="chartErrorSubContainer-0-2-8"
          >
            <svg
              class="errorIcon-0-2-7 errorIcon-d26-0-2-37"
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

    it("renders small groupedbarchart card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "small";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chardContainerSkeleton-0-2-6"
        >
          <div
            class="chartErrorSubContainer-0-2-8"
          >
            <svg
              class="errorIcon-0-2-7 errorIcon-d32-0-2-43"
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

    it("renders groupedbarchart card error display with custom error label", async () => {
      props.loading = false;
      props.error = true;
      props.errorLabel = "Test error label";

      let container;

      act(() => {
        container = render(
          <ThemeProvider theme={theme}>
            <GroupedBarChartCard {...props} />
          </ThemeProvider>
        ).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="chardContainerSkeleton-0-2-6"
        >
          <div
            class="chartErrorSubContainer-0-2-8"
          >
            <svg
              class="errorIcon-0-2-7 errorIcon-d38-0-2-49"
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
