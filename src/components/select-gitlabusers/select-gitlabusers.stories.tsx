import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import GitlabUsersSelect from '.';
import { GitlabService } from './service/gitlab-service';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add(
  'Gitlab users',
  () => {
    const service = new GitlabService();
    return (
      <GitlabUsersSelect
        service={service}
        gitLabUrl={text('Gitlab URL', 'https://gitlab.com/')}
        privateToken={text('Private Gitlab token', 'my_token')}
        onChange={action('onChange')}
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
