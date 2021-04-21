import {
  boolean,
  color,
  select,
  text,
  withKnobs,
} from "@storybook/addon-knobs";

import ButtonWithIcon from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add(
  "With icon",
  () => {
    const hasOnClick = boolean("Has onClick", true);

    return (
      <ButtonWithIcon
        iconName={select(
          "Icon name",
          { BasketBall: "BasketBall", Ski: "Ski" },
          "BasketBall"
        )}
        onClick={hasOnClick ? action("onClick") : undefined}
        color={color("Custom color", "")}
        disabled={boolean("Disabled", false)}
      >
        {text("Label", "Button with icon")}
      </ButtonWithIcon>
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
