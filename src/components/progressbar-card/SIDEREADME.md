##### Optional props

| Name           | Type                                         | Default                     | Description                          |
| -------------- | -------------------------------------------- | --------------------------- | ------------------------------------ |
| `completed`    | `number`                                     | `0`                         | `The number of completed items`      |
| `label`        | `string`                                     | `string.emptx`              | `The card label`                     |
| `total`        | `number`                                     | `0`                         | `The total number of items`          |
| `loading`      | `boolean`                                    | `false`                     | `Attribute to display loading mode`  |
| `error`        | `boolean`                                    | `false`                     | `Attribute to display error mode`    |
| `errorLabel`   | `boolean`                                    | `string.empty`              | `The error label to display in card` |
| `icon`         | `enum(pizza, linkedin, checkmark, document)` | `pizza`                     | `The name of the icon`               |
| `primaryColor` | `string`                                     | `primary theme color`       | `The primary color of the card`      |
| `seconColor`   | `string`                                     | `light-primary theme color` | `The second color of the card`       |
| `size`         | `enum(small,medium,large)`                   | `medium`                    | `The size of the card`               |

If loading and error are both true the loading mode will be display