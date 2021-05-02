import ProgressBarCard, { ProgressBarCardProps } from ".";
import { act, render } from "@testing-library/react";

import { IconName } from "../../enums/icon-name";
import React from "react";

describe("ProgressBarCard", () => {
  let props: ProgressBarCardProps;

  beforeEach(() => {
    props = {
      completed: 9,
      total: 10,
      label: "Test label",
      icon: IconName.pizza,
    };
  });

  describe("render()", () => {
    it("renders a medium progressbar card with pizza icon", async () => {
      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="card-0-2-2"
        >
          <div
            class="iconContainer-0-2-4 iconContainer-d0-0-2-14"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32 192 32 125.76 44.53 69 67.26 48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0021.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25 4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0021.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27z"
              />
              <path
                d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 00-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 00-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 00256 480a31.73 31.73 0 0028.76-18.06l.06-.13 137.3-297.57a15.94 15.94 0 00-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87zm-215.1 83.07a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64 128a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64-112a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85z"
              />
            </svg>
          </div>
          <div
            class="cardContent-0-2-6 cardContent-d1-0-2-15"
          >
            <div
              class="cardLabel-0-2-7 cardLabel-d2-0-2-16"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-9 cardDescritpion-d4-0-2-18"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-22"
              >
                <div
                  class="filler-0-2-23 filler-d0-0-2-25"
                >
                  <span
                    class="label-0-2-24"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders a small progressbar card with pizza icon", async () => {
      props.size = "small";

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="card-0-2-2"
        >
          <div
            class="iconContainer-0-2-4 iconContainer-d8-0-2-26"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32 192 32 125.76 44.53 69 67.26 48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0021.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25 4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0021.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27z"
              />
              <path
                d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 00-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 00-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 00256 480a31.73 31.73 0 0028.76-18.06l.06-.13 137.3-297.57a15.94 15.94 0 00-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87zm-215.1 83.07a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64 128a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64-112a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85z"
              />
            </svg>
          </div>
          <div
            class="cardContent-0-2-6 cardContent-d9-0-2-27"
          >
            <div
              class="cardLabel-0-2-7 cardLabel-d10-0-2-28"
            >
              Test label
            </div>
            <div>
              <div
                class="root-0-2-22"
              >
                <div
                  class="filler-0-2-23 filler-d1-0-2-34"
                >
                  <span
                    class="label-0-2-24"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders a large progressbar card with pizza icon", async () => {
      props.size = "large";

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="card-0-2-2"
        >
          <div
            class="iconContainer-0-2-4 iconContainer-d16-0-2-35"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32 192 32 125.76 44.53 69 67.26 48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0021.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25 4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0021.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27z"
              />
              <path
                d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 00-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 00-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 00256 480a31.73 31.73 0 0028.76-18.06l.06-.13 137.3-297.57a15.94 15.94 0 00-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87zm-215.1 83.07a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64 128a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85zm64-112a32 32 0 1129.85-29.85 32 32 0 01-29.85 29.85z"
              />
            </svg>
          </div>
          <div
            class="cardContent-0-2-6 cardContent-d17-0-2-36"
          >
            <div
              class="cardLabel-0-2-7 cardLabel-d18-0-2-37"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-9 cardDescritpion-d20-0-2-39"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-22"
              >
                <div
                  class="filler-0-2-23 filler-d2-0-2-43"
                >
                  <span
                    class="label-0-2-24"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders medium progressbar card with linkedin icon", async () => {
      props.size = "medium";
      props.icon = IconName.linkedin;

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="card-0-2-2"
        >
          <div
            class="iconContainer-0-2-4 iconContainer-d24-0-2-44"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
              />
            </svg>
          </div>
          <div
            class="cardContent-0-2-6 cardContent-d25-0-2-45"
          >
            <div
              class="cardLabel-0-2-7 cardLabel-d26-0-2-46"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-9 cardDescritpion-d28-0-2-48"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-22"
              >
                <div
                  class="filler-0-2-23 filler-d3-0-2-52"
                >
                  <span
                    class="label-0-2-24"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders medium progressbar card with document icon", async () => {
      props.size = "medium";
      props.icon = IconName.document;

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="card-0-2-2"
        >
          <div
            class="iconContainer-0-2-4 iconContainer-d32-0-2-53"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"
              />
              <path
                d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"
              />
            </svg>
          </div>
          <div
            class="cardContent-0-2-6 cardContent-d33-0-2-54"
          >
            <div
              class="cardLabel-0-2-7 cardLabel-d34-0-2-55"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-9 cardDescritpion-d36-0-2-57"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-22"
              >
                <div
                  class="filler-0-2-23 filler-d4-0-2-61"
                >
                  <span
                    class="label-0-2-24"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders medium progressbar card with checkmark icon", async () => {
      props.size = "medium";
      props.icon = IconName.checkmark;

      let container;
      jest.useFakeTimers();

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
        jest.advanceTimersByTime(2000);
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="card-0-2-2"
        >
          <div
            class="iconContainer-0-2-4 iconContainer-d40-0-2-62"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48.19 121.42l24.1 21.06-73.61 84.1-24.1-23.06zM191.93 342.63L121.37 272 144 249.37 214.57 320zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06z"
              />
            </svg>
          </div>
          <div
            class="cardContent-0-2-6 cardContent-d41-0-2-63"
          >
            <div
              class="cardLabel-0-2-7 cardLabel-d42-0-2-64"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-9 cardDescritpion-d44-0-2-66"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-22"
              >
                <div
                  class="filler-0-2-23 filler-d5-0-2-70"
                >
                  <span
                    class="label-0-2-24"
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders progressbar card loading display", async () => {
      props.loading = true;

      let container;

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="root-0-2-1"
        >
          <div
            class="card-0-2-2"
          >
            <div
              class="iconContainer-0-2-4 iconContainer-d56-0-2-79 skeletonAnimation-0-2-5"
            />
            <div
              class="cardContent-0-2-6 cardContent-d57-0-2-80"
            >
              <div
                class="cardLabel-0-2-7 cardLabel-d58-0-2-81 skeletonAnimation-0-2-5 cardLabelSkeleton-0-2-8 cardLabelSkeleton-d59-0-2-82"
              />
              <div
                class="cardDescritpion-0-2-9 cardDescritpion-d60-0-2-83 skeletonAnimation-0-2-5 cardDescritpionSkeleton-0-2-10 cardDescritpionSkeleton-d61-0-2-84"
              />
              <div
                class="skeletonAnimation-0-2-5 cardProgressBarSkeleton-0-2-11 cardProgressBarSkeleton-d62-0-2-85"
              >
                ProgressBar
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders medium progressbar card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "medium";

      let container;

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="root-0-2-1"
        >
          <div
            class="card-0-2-2 cardError-0-2-3"
          >
            <div
              class="chartErrorSubContainer-0-2-13"
            >
              <svg
                class="errorIcon-0-2-12 errorIcon-d79-0-2-102"
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
      </div>
      `);
    });

    it("renders large progressbar card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "large";

      let container;

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="root-0-2-1"
        >
          <div
            class="card-0-2-2 cardError-0-2-3"
          >
            <div
              class="chartErrorSubContainer-0-2-13"
            >
              <svg
                class="errorIcon-0-2-12 errorIcon-d95-0-2-118"
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
      </div>
      `);
    });

    it("renders small progressbar card error display with default error label", async () => {
      props.loading = false;
      props.error = true;
      props.size = "small";

      let container;

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="root-0-2-1"
        >
          <div
            class="card-0-2-2 cardError-0-2-3"
          >
            <div
              class="chartErrorSubContainer-0-2-13"
            >
              <svg
                class="errorIcon-0-2-12 errorIcon-d111-0-2-134"
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
      </div>
      `);
    });

    it("renders progressbar card error display with custom error label", async () => {
      props.loading = false;
      props.error = true;
      props.errorLabel = "Test error label";

      let container;

      act(() => {
        container = render(<ProgressBarCard {...props} />).container;
      });

      expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="root-0-2-1"
      >
        <div
          class="root-0-2-1"
        >
          <div
            class="card-0-2-2 cardError-0-2-3"
          >
            <div
              class="chartErrorSubContainer-0-2-13"
            >
              <svg
                class="errorIcon-0-2-12 errorIcon-d127-0-2-150"
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
      </div>
      `);
    });
  });
});
