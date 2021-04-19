# GroupedBarChart card

<!-- STORY -->

<hr>

A component which display a card with an grouped bar chart

##### Import

```js
import { GroupedBarChartCard } from '@bastienricoeur/components';
```

##### Usage

```jsx
<GroupedBarChartCard 
  label="Grouped Bar Chart"
  data={[
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
      },
  ]}
  groupLabels={['1', '2', '3', '4', '5', '6']}
/>
```
