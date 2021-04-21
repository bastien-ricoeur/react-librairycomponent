import { boolean, color, text, withKnobs } from "@storybook/addon-knobs";

import Button from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    const hasOnClick = boolean("Has onClick", true);

    return (
      <Button
        onClick={hasOnClick ? action("onClick") : undefined}
        color={color("Custom color", "")}
        disabled={boolean("Disabled", false)}
      >
        {text("Label", "Simple button")}
      </Button>
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
