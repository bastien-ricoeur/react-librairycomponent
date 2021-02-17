import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import WeatherSelect from '.';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add(
  'Weather',
  () => (
    <WeatherSelect
      isClearable={boolean('Clearable', false)}
      onChange={action('onChange')}
    />
  ),
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
