import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, number, select, text } from '@storybook/addon-knobs';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import ProgressBarCard from '.';

const stories = storiesOf('Dashboard card', module);

stories.addDecorator(withKnobs);

stories.add(
  'ProgressBar Card',
  () => (
    <ProgressBarCard
      completed={number('Completed', 2)}
      label={text('Label', 'Brown Bag Lunch')}
      total={number('Total', 4)}
      iconColor={color('Icon color', '')}
      iconBackground={color('Icon background-color', '')}
      size={select(
        'Icon name',
        { Small: 'small', Medium: 'medium', Large: 'large' },
        'medium'
      )}
    />
  ),
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
