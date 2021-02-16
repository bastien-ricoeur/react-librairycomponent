import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import Button from '.';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add(
  'Default',
  () => {
    const hasOnClick = boolean('Has onClick', true);

    return (
      <Button
        onClick={hasOnClick ? action('onClick') : undefined}
        color={color('Custom color', '')}
        disabled={boolean('Disabled', false)}
      >
        {text('Label', 'Simple button')}
      </Button>
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
