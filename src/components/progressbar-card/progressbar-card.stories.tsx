import { color, number, select, text, withKnobs } from "@storybook/addon-knobs";

import ProgressBarCard from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { storiesOf } from "@storybook/react";

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
        icon={select(
          "Icon name",
          {
            Pizza: "pizza",
            Linkedin: "linkedin",
            Checkmark: "checkmark",
            Document: "document",
          },
          "pizza"
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
