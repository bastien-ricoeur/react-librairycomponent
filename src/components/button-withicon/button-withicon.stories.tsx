import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  color,
  select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import ButtonWithIcon from '.';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add(
  'With icon',
  () => {
    const hasOnClick = boolean('Has onClick', true);

    return (
      <ButtonWithIcon
        iconName={select(
          'Icon name',
          { BasketBall: 'BasketBall', Ski: 'Ski' },
          'BasketBall'
        )}
        onClick={hasOnClick ? action('clicked') : undefined}
        color={color('Custom color', '')}
        disabled={boolean('Disabled', false)}
      >
        {text('Label', 'Button with icon')}
      </ButtonWithIcon>
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
