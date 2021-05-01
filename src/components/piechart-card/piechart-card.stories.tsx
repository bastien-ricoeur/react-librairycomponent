import {
  boolean,
  object,
  select,
  text,
  withKnobs,
} from "@storybook/addon-knobs";

import PieChartCard from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Dashboard card", module);

stories.addDecorator(withKnobs);

stories.add(
  "PiecChart Card",
  () => {
    const data = [
      {
        label: "Production",
        data: 81,
      },
      {
        label: "Interne",
        data: 10,
      },
      {
        label: "Commercial",
        data: 6,
      },
      {
        label: "Veille techno",
        data: 3,
      },
    ];

    return (
      <div style={{ width: 700, height: 400 }}>
        <PieChartCard
          label={text("Label", "Grouped Bar Chart")}
          data={object("Data", data)}
          loading={boolean("Is loading", false)}
          error={boolean("Error", false)}
          errorLabel={text("Error label", "An error has occurrred")}
          size={select(
            "Card size",
            { Small: "small", Medium: "medium", Large: "large" },
            "medium"
          )}
        />
      </div>
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
