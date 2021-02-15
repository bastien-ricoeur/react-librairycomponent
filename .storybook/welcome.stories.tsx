import React from "react";
import { storiesOf } from "@storybook/react";

import README from './README.md';

const stories = storiesOf("Welcome", module);
stories.add("Presentation", () => (<span></span>), {
  readme: {
    content: README
  },
});