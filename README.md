# 📖 React Component Library
<p style="display: flex;">
  <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/Tests-passing-green?logo=github" />
  <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/Code-TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/Code-JavaScript-F7DF1E?logo=javascript&logoColor=white" />
  <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/Code-CSS3-1572B6?logo=css3&logoColor=white" />
  <a href="https://602fb1637d0cff00233b568c-vqguctfrts.chromatic.com/" target="_blank">
    <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/Doc-Storybook-FF4785?logo=storybook&logoColor=white" />
  </a>
  <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/Testing-Jest-C21325?logo=jest&logoColor=white" />
  <img style="margin-left: 2px; margin-right: 2px;" src="https://img.shields.io/badge/IDE-VS%20Code-007ACC?logo=visual%20studio%20code&logoColor=whit" />
</p>

A React Component Librairy which offer you a few nice components for your website.
This library uses [react-select](https://react-select.com) and [react-icons](https://react-icons.github.io/react-icons) librairies.

## 🔧 Installation

Use the package manager [npm](https://www.npmjs.com) to install it.

```bash
npx create-react-app my-app --template @bastienricoeur/simple-crud
```

To install this librairy you need to authenticate you on npm registry. 
To do that you need to create a .npmrc file in your project root and copy this line :
```bash
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```
And you need to create a environment varibale with your npm token.

## 🔨 Usage

```js
import { ButtonWithIcon } from '@bastienricoeur/components';
```
```jsx
<ButtonWithIcon iconName="BasketBall" >Button with icon</Button>
```

## &#x1f4c8; GitHub Stats

<span style="display: flex;">
  <a href="https://github.com/bastien-ricoeur" target="_blank"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bastien-ricoeur&theme=dark" /></a>
  <a href="https://github.com/bastien-ricoeur" target="_blank"><img src="https://github-readme-stats.vercel.app/api/?username=bastien-ricoeur&show_icons=true&theme=dark" /></a>
</span>
<a href="https://github.com/bastien-ricoeur/react-librarycomponent" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=bastien-ricoeur&repo=react-librarycomponent&show_owner=true&card_width=10000&theme=dark" /></a>

    
## 👬 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

If you want to contribute to the library you need to realize this steps to use git hooks for cleaning and testing your code :
* Copy the content of git-hooks folder into your .git/hooks folder
* Copy the husky.sh file from the node_modules/husky/scripts to your .git/hooks folder


## 📚 License
[![License: MIT](https://img.shields.io/badge/Licence-MIT-yellow?logo=github)](https://opensource.org/licenses/MIT)