# GitlabUsers select

<!-- STORY -->

<hr>

A component which allow people to select a Gitlab user in a list of options.
This component fetches the Gitlab API (v4).

##### Import

```js
import { GitlabUsersSelect } from '@bastienricoeur/components';
```

##### Usage

```jsx
<GitlabUsersSelect 
  service={service} 
  gitLabUrl='https://gitlab.com'
  privateToken='my_token' />
```
