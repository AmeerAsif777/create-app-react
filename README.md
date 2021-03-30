# create-app-react

> Say good bye to `create-react-app`, here comes alternative `create-app-react`. The goal of this boilerplate is to provide more user control to customize babel, webpack, eslint, prettier and other configurations.

---

## Definition

Basic react App setup with `babel`, `react-router`, `eslint`, `prettier`, and separate dependencies `webpack` files with basic loaders such as babel-loader, css-loader, file-loader, style-loader, url-loader and plugins.

---

<font color=green>_This is similar to create-react-app but gives you more control over the build configurations._</font>

---

## Features

### <font color=green>Babel</font>

Babel enables one writing code with JavaScript features that aren't supported by most browser yet.

### Babel plugins and presets are used in this boilerplate

`@babel/preset-react` is preset for react<br />
`@babel/preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms are needed by your target environment(s). <br />
`@babel/core` contains the core functionality of Babel. <br />
`babel-loader` will be used by webpack to transpile Modern JS into the JS code that browsers can understand.<br />
`babel-polyfill`: Just using `babel` is not enough for your application to work because all the latest Javascript features are not supported in all browsers. So to fix this problem, we need to use a polyfill.

---

### <font color=green>Eslint</font>

ESLint in JavaScript helps you to set up rules and to enforce code style across your code base.

> <font color=yellow>Important:</font> You may also want to install the `ESLint extension/plugin` for your editor/IDE. For instance, in VSCode you can find the ESLint extension on their marketplace. I guess it's quite similar for your IDE/editor of choice. Afterward, you should see all the ESLint errors in your editor's/IDE's output.

---

### <font color=green>Prettier</font>

Prettier is used to autoformat your code to enforce an opinionated code format.

---

### <font color=green>Webpack</font>

Webpack is a tool wherein you use a configuration to explain to the builder how to load specific things . You describe to Webpack how to load \*. js files, or how it should look at.
In this boilerplate, there are three different config files:

> `webpack.dev.js`: dev-specific settings would go here <br /> `webpack.prod.js`: prod-specific settings would go here <br /> `webpack.common.js`: common settings between dev and prod environments would go here

---

## Installation

There are two ways to install `create-app-react`
<br/>

The former way is to download `create-app-react` globally

```bash
npm install -g create-app-react
```

After installation, you can use the following command to initialize your project.

```bash
create-app-react my-project
```

The latter way is
<br />

You can use npx to directly use create-app-react without installing globally. This will save your memory space.

```bash
npx create-app-react my-project
```

---

## Development

After initializing your project, you are ready to use your project by using following scripts.

```
cd my-project
npm start
```

Runs the app in the development mode.

Open http://localhost:8080 to view it in the browser.

<font color= yellow >_If you make changes to any of your page, your app will hot-reload._ </font>

npm run build
Builds the app for production and files are saved to the build folder.

---

## Build

It bundles your files in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.

Your app is ready to be deployed!!

<font color=yellow> Happy coding techie ;-) </font>
