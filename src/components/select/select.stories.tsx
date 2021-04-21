import { boolean, object, withKnobs } from "@storybook/addon-knobs";

import CustomSelect from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Select", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <CustomSelect
        options={object("options", options)}
        isClearable={boolean("Clearable", false)}
        onChange={action("onChange")}
      />
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
