import ProgressBarCard, { ProgressBarCardProps } from ".";
import { act, render } from "@testing-library/react";

import React from "react";
import { IconName } from "../../enums/icon-name";

describe("ProgressBarCard", () => {
  let props: ProgressBarCardProps;

  beforeEach(() => {
    props = {
      completed: 9,
      total: 10,
      label: "Test label",
      icon: IconName.pizza
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
            class="iconContainer-0-2-3 iconContainer-d0-0-2-11"
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
            class="cardContent-0-2-5 cardContent-d1-0-2-12"
          >
            <div
              class="cardLabel-0-2-6 cardLabel-d2-0-2-13"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-8 cardDescritpion-d4-0-2-15"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-18"
              >
                <div
                  class="filler-0-2-19 filler-d0-0-2-21"
                >
                  <span
                    class="label-0-2-20"
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
      props.size = 'small';

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
            class="iconContainer-0-2-3 iconContainer-d7-0-2-22"
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
            class="cardContent-0-2-5 cardContent-d8-0-2-23"
          >
            <div
              class="cardLabel-0-2-6 cardLabel-d9-0-2-24"
            >
              Test label
            </div>
            <div>
              <div
                class="root-0-2-18"
              >
                <div
                  class="filler-0-2-19 filler-d1-0-2-29"
                >
                  <span
                    class="label-0-2-20"
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
      props.size = 'large';

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
            class="iconContainer-0-2-3 iconContainer-d14-0-2-30"
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
            class="cardContent-0-2-5 cardContent-d15-0-2-31"
          >
            <div
              class="cardLabel-0-2-6 cardLabel-d16-0-2-32"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-8 cardDescritpion-d18-0-2-34"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-18"
              >
                <div
                  class="filler-0-2-19 filler-d2-0-2-37"
                >
                  <span
                    class="label-0-2-20"
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
      props.size = 'medium';
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
            class="iconContainer-0-2-3 iconContainer-d21-0-2-38"
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
            class="cardContent-0-2-5 cardContent-d22-0-2-39"
          >
            <div
              class="cardLabel-0-2-6 cardLabel-d23-0-2-40"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-8 cardDescritpion-d25-0-2-42"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-18"
              >
                <div
                  class="filler-0-2-19 filler-d3-0-2-45"
                >
                  <span
                    class="label-0-2-20"
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
      props.size = 'medium';
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
            class="iconContainer-0-2-3 iconContainer-d28-0-2-46"
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
            class="cardContent-0-2-5 cardContent-d29-0-2-47"
          >
            <div
              class="cardLabel-0-2-6 cardLabel-d30-0-2-48"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-8 cardDescritpion-d32-0-2-50"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-18"
              >
                <div
                  class="filler-0-2-19 filler-d4-0-2-53"
                >
                  <span
                    class="label-0-2-20"
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
      props.size = 'medium';
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
            class="iconContainer-0-2-3 iconContainer-d35-0-2-54"
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
            class="cardContent-0-2-5 cardContent-d36-0-2-55"
          >
            <div
              class="cardLabel-0-2-6 cardLabel-d37-0-2-56"
            >
              Test label
            </div>
            <div
              class="cardDescritpion-0-2-8 cardDescritpion-d39-0-2-58"
            >
              9
               / 
              10
            </div>
            <div>
              <div
                class="root-0-2-18"
              >
                <div
                  class="filler-0-2-19 filler-d5-0-2-61"
                >
                  <span
                    class="label-0-2-20"
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
      props.isLoading = true;

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
          class="root-0-2-1"
        >
          <div
            class="card-0-2-2"
          >
            <div
              class="iconContainer-0-2-3 iconContainer-d49-0-2-69 skeletonAnimation-0-2-4"
            />
            <div
              class="cardContent-0-2-5 cardContent-d50-0-2-70"
            >
              <div
                class="cardLabel-0-2-6 cardLabel-d51-0-2-71 skeletonAnimation-0-2-4 cardLabelSkeleton-0-2-7 cardLabelSkeleton-d52-0-2-72"
              />
              <div
                class="cardDescritpion-0-2-8 cardDescritpion-d53-0-2-73 skeletonAnimation-0-2-4 cardDescritpionSkeleton-0-2-9 cardDescritpionSkeleton-d54-0-2-74"
              />
              <div
                class="skeletonAnimation-0-2-4 cardProgressBarSkeleton-0-2-10 cardProgressBarSkeleton-d55-0-2-75"
              >
                ProgressBar
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });
  });
});
