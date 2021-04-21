##### Required props

| Name         | Type     | Description                     |
| ------------ | -------- | ------------------------------- |
| `completed`  | `number` | `The number of completed items` |
| `label`      | `string` | `The card label`                |
| `total`      | `number` | `The total number of items`     |

##### Optional props

| Name            | Type                                         | Default                     | Description                         |
| --------------  | -------------------------------------------- | --------------------------- | ----------------------------------- |
| `isLoading`     | `boolean`                                    | `false`                     | `Attribute to display loading mode` |
| `icon`          | `enum(pizza, linkedin, checkmark, document)` | `pizza`                     | `The name of the icon`              |
| `primaryColor`  | `string`                                     | `primary theme color`       | `The primary color of the card`     |
| `seconColor`    | `string`                                     | `light-primary theme color` | `The second color of the card`      |
| `size`          | `enum(small,medium,large)`                   | `medium`                    | `The size of the card`              |