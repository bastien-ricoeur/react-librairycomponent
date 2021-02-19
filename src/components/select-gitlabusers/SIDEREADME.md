##### Required props

| Name           | Type     | Description                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------- |
| `service`      | `class`  | `a class which provides a fetchUsers method to get Gitlab users by the API` |
| `gitLabUrl`    | `string` | `your Gitlab url (ex: https://gitlab.com)`                                  |
| `privateToken` | `string` | `your private token from your Gitlab`                                       |

##### Optional props

| Name          | Type       | Default                          | Description                  |
| ------------- | ---------- | -------------------------------- | ---------------------------- |
| `onChange`    | `function` | `(value: any, event: any) => {}` |  `handle the option changes` |