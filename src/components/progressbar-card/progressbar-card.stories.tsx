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
    <div style={{ width: 350, height: 150 }}>
      <ProgressBarCard
        completed={number('Completed', 2)}
        total={number('Total', 4)}
        label={text('Label', 'Brown Bag Lunch')}
        primaryColor={color('Primary color', '')}
        secondColor={color('Second color', '')}
        size={select(
          'Icon name',
          { Small: 'small', Medium: 'medium', Large: 'large' },
          'medium'
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
