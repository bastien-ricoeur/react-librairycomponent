import {
  boolean,
  color,
  number,
  select,
  text,
  withKnobs,
} from "@storybook/addon-knobs";

import ProgressBarCard from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { storiesOf } from "@storybook/react";
import { IconName } from "../icon-name";

const stories = storiesOf("Dashboard card", module);

stories.addDecorator(withKnobs);

stories.add(
  "ProgressBar Card",
  () => (
    <div style={{ width: 350, height: 150 }}>
      <ProgressBarCard
        completed={number("Completed", 2)}
        total={number("Total", 4)}
        label={text("Label", "Brown Bag Lunch")}
        isLoading={boolean("Is loading", false)}
        icon={select(
          "Icon name",
          {
            Pizza: IconName.pizza,
            Linkedin: IconName.linkedin,
            Checkmark: IconName.checkmark,
            Document: IconName.document,
          },
          IconName.pizza
        )}
        primaryColor={color("Primary color", "")}
        secondColor={color("Second color", "")}
        size={select(
          "Card size",
          { Small: "small", Medium: "medium", Large: "large" },
          "medium"
        )}
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
