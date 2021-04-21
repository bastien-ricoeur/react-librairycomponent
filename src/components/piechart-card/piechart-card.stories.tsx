import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text, object } from "@storybook/addon-knobs";

import README from "./README.md";
import SIDEREADME from "./SIDEREADME.md";
import PieChartCard from ".";

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
          data={object("data", data)}
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
