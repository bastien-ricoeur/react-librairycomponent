##### Optional props

| Name          | Type                       | Default        | Description                                               |
| ------------- | -------------------------- | ------++++++-- | --------------------------------------------------------- |
| `label`       | `string`                   | `string.empty` | `The card label`                                          |
| `data`        | `array`                    |  `[]`          | `[{label: 'Data 1',data: 90},{label: 'Data 2',data: 10}]` |
| `loading`     | `boolean`                  | `false`        | `Attribute to display loading mode`                       |
| `error`       | `boolean`                  | `false`        | `Attribute to display error mode`                         |
| `errorLabel`  | `boolean`                  | `string.empty` | `The error label to display in card`                      |
| `size`        | `enum(small,medium,large)` | `medium`       | `The size of the card`                                    |

If loading and error are both true the loading mode will be display
