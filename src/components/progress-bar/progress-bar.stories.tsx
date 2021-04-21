import { color, number, withKnobs } from "@storybook/addon-knobs";

import ProgressBar from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Progress", module);

stories.addDecorator(withKnobs);

stories.add(
  "Progress Bar",
  () => (
    <div style={{ width: 500 }}>
      <ProgressBar
        completed={number("Completed percent", 90)}
        bgcolor={color("Background color", "")}
      />
    </div>
  ),
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
