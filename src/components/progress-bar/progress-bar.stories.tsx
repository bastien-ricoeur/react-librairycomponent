import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import ProgressBar from '.';

const stories = storiesOf('Progress', module);

stories.addDecorator(withKnobs);

stories.add(
  'Progress Bar',
  () => (
    <div style={{ width: 500 }}>
      <ProgressBar completed={number('Completed percent', 90)} />
    </div>
  ),
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
