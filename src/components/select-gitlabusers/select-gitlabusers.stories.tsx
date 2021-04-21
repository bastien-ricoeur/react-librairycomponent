import { text, withKnobs } from "@storybook/addon-knobs";

import { GitlabService } from "./service/gitlab-service";
import GitlabUsersSelect from ".";
import README from "./README.md";
import React from "react";
import SIDEREADME from "./SIDEREADME.md";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Select", module);

stories.addDecorator(withKnobs);

stories.add(
  "Gitlab users",
  () => {
    const service = new GitlabService();
    return (
      <GitlabUsersSelect
        service={service}
        gitLabUrl={text("Gitlab URL", "https://gitlab.com")}
        privateToken={text("Private Gitlab token", "my_token")}
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
