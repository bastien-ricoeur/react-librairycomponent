import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, object, array } from '@storybook/addon-knobs';

import README from './README.md';
import SIDEREADME from './SIDEREADME.md';
import GroupedBarChartCard from '.';

const stories = storiesOf('Dashboard card', module);

stories.addDecorator(withKnobs);

stories.add(
  'GroupedBarChart Card',
  () => {
    const data = [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
      },
      {
        label: 'Dataset 2',
        data: [2, 3, 20, 5, 1, 4],
      },
      {
        label: 'Dataset 3',
        data: [3, 10, 13, 15, 22, 30],
      },
      {
        label: 'Dataset 4',
        data: [8, 1, 3, 15, 22, 9],
      },
    ];

    const groupLabels = ['1', '2', '3', '4', '5', '6'];

    return (
      <div style={{ width: 700, height: 400 }}>
        <GroupedBarChartCard
          label={text('Label', 'Grouped Bar Chart')}
          data={object('data', data)}
          groupLabels={array('groupLabels', groupLabels)}
          size={select(
            'Card size',
            { Small: 'small', Medium: 'medium', Large: 'large' },
            'medium'
          )}
        />
      </div>
    );
  },
  {
    readme: {
      content: README,
      sidebar: SIDEREADME,
    },
  }
);
