import React from "react";
import { render } from "@testing-library/react";

import WeatherSelect, { WeatherSelectProps } from ".";

describe("WeatherSelect", () => {
  let props: WeatherSelectProps;

  beforeEach(() => {
    props = {
      isClearable: false,
      onChange: jest.fn(),
    };
  });

  describe("render()", () => {
    it("renders a weather select component", () => {
      const { container } = render(<WeatherSelect {...props} />);
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class=" css-2b097c-container"
        >
          <div
            class=" css-yk16xz-control"
          >
            <div
              class=" css-g1d714-ValueContainer"
            >
              <div>
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  style="margin-right: 8px;"
                  viewBox="0 0 640 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"
                  />
                </svg>
                Cloudy
              </div>
              <div
                class="css-b8ldur-Input"
              >
                <div
                  class=""
                  style="display: inline-block;"
                >
                  <input
                    aria-autocomplete="list"
                    autocapitalize="none"
                    autocomplete="off"
                    autocorrect="off"
                    id="react-select-2-input"
                    spellcheck="false"
                    style="box-sizing: content-box; width: 2px; border: 0px; opacity: 1; outline: 0; padding: 0px;"
                    tabindex="0"
                    type="text"
                    value=""
                  />
                  <div
                    style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-family: -webkit-small-control; letter-spacing: normal; text-transform: none;"
                  />
                </div>
              </div>
            </div>
            <div
              class=" css-1hb7zxy-IndicatorsContainer"
            >
              <span
                class=" css-1okebmr-indicatorSeparator"
              />
              <div
                aria-hidden="true"
                class=" css-tlfecz-indicatorContainer"
              >
                <svg
                  aria-hidden="true"
                  class="css-tj5bde-Svg"
                  focusable="false"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                >
                  <path
                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it("renders a weather select component clearable", () => {
      props.isClearable = true;
      const { container } = render(<WeatherSelect {...props} />);
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class=" css-2b097c-container"
        >
          <div
            class=" css-yk16xz-control"
          >
            <div
              class=" css-g1d714-ValueContainer"
            >
              <div>
                <svg
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  style="margin-right: 8px;"
                  viewBox="0 0 640 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"
                  />
                </svg>
                Cloudy
              </div>
              <div
                class="css-b8ldur-Input"
              >
                <div
                  class=""
                  style="display: inline-block;"
                >
                  <input
                    aria-autocomplete="list"
                    autocapitalize="none"
                    autocomplete="off"
                    autocorrect="off"
                    id="react-select-3-input"
                    spellcheck="false"
                    style="box-sizing: content-box; width: 2px; border: 0px; opacity: 1; outline: 0; padding: 0px;"
                    tabindex="0"
                    type="text"
                    value=""
                  />
                  <div
                    style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-family: -webkit-small-control; letter-spacing: normal; text-transform: none;"
                  />
                </div>
              </div>
            </div>
            <div
              class=" css-1hb7zxy-IndicatorsContainer"
            >
              <div
                aria-hidden="true"
                class=" css-tlfecz-indicatorContainer"
              >
                <svg
                  aria-hidden="true"
                  class="css-tj5bde-Svg"
                  focusable="false"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                >
                  <path
                    d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                  />
                </svg>
              </div>
              <span
                class=" css-1okebmr-indicatorSeparator"
              />
              <div
                aria-hidden="true"
                class=" css-tlfecz-indicatorContainer"
              >
                <svg
                  aria-hidden="true"
                  class="css-tj5bde-Svg"
                  focusable="false"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                >
                  <path
                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });
  });
});
