# create-app-react

> Say good bye to `create-react-app`, here comes alternative `create-app-react`. The goal of this package is to provide more user control to customize babel, webpack, and other configurations.
___
## Definition
Basic react App setup with babel, react-router, webpack with basic loaders such as babel-loader, css-loader, file-loader, style-loader, url-loader.

---
<font color=green>*This is similar to create-react-app but gives you more control over the build configurations.*</font>
___

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
___
## Development

After initializing your project, you are ready to use your project by using following scripts.
``` 
cd my-project
npm start
```
Runs the app in the development mode.

Open http://localhost:8080 to view it in the browser.

<font color= yellow >*If you make changes to any of your page, your app will hot-reload.* </font>

npm run build
Builds the app for production and files are saved to the build folder.
___
## Build

It bundles your files in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.

Your app is ready to be deployed!!

<font color=yellow> Happy coding techie ;-) </font>