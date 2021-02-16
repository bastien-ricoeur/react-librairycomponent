import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import CustomSelect from '.';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add(
  'Default',
  () => {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <CustomSelect
        options={object('options', options)}
        isClearable={boolean('Clearable', false)}
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
