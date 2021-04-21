import { boolean, withKnobs } from "@storybook/addon-knobs";

import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import WeatherSelect from ".";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Select", module);

stories.addDecorator(withKnobs);

stories.add(
  "Weather",
  () => (
    <WeatherSelect
      isClearable={boolean("Clearable", false)}
      onChange={action("onChange")}
    />
  ),
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
