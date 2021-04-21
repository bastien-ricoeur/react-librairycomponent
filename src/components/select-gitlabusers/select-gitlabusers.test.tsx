import React from "react";
import { act, render } from "@testing-library/react";

import GitlabUsersSelect, { GitlabUsersSelectProps } from ".";
import {
  DefaultMockService,
  ErrorMockService,
  DelayMockService,
} from "./service/mocks/gitlab-service.mock";

describe("GitlabUsersSelect", () => {
  let props: GitlabUsersSelectProps;

  beforeEach(() => {
    props = {
      service: new DefaultMockService(),
      gitLabUrl: "gitlab.com",
      privateToken: "my_token",
      onChange: jest.fn(),
    };
  });

  describe("render()", () => {
    it("renders a Gitlab users select component", async () => {
      let container;

      await act(async () => {
        container = render(<GitlabUsersSelect {...props} />).container;
      });

      expect(container).toMatchInlineSnapshot(`
      <div>
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
                <div
                  style="display: flex; align-items: center;"
                >
                  <img
                    alt="user1.img"
                    height="30"
                    src="user1.img"
                    style="border-radius: 50%; margin-right: 10px;"
                    width="30"
                  />
                  User 1
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
      </div>
      `);
    });

    it("renders an error while fetching Gitlab API", async () => {
      let container;
      props.service = new ErrorMockService();
      await act(async () => {
        container = render(<GitlabUsersSelect {...props} />).container;
      });

      expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <span>
            Error while fetching Gitlab API...
          </span>
        </div>
      </div>
      `);
    });

    it("renders the loading component of Gitlab users select component", async () => {
      let container;
      props.service = new DelayMockService();
      await act(async () => {
        container = render(<GitlabUsersSelect {...props} />).container;
      });

      expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <span>
            Fetching gitlab API in progress
          </span>
        </div>
      </div>
      `);
    });
  });
});
