#!/usr/bin/env node
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

const packageJson = require('../package.json');
// const babel = require("../.babelrc");

const scripts = `"start": "webpack-dev-server --config config/webpack.dev.js --open --hot",
"build": "webpack --config config/webpack.prod.js"`;

// const babel = `"babel": ${JSON.stringify(packageJson.babel)}`;

const getDeps = (deps) =>
  Object.entries(deps)
    .map((dep) => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '')
    // exclude the dependency only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, '');

console.log('Initializing project..');

// Windows ---> create folder
// Other Os ---> Create directory
// Initialize npm
exec(
  `mkdir ${process.argv[2]} && cd ${process.argv[2]} && npm init -f`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't:
    ${initErr}`);
      return;
    }
    const packageJSON = `${process.argv[2]}/package.json`;
    // replace the default scripts
    fs.readFile(packageJSON, (err, file) => {
      if (err) throw err;
      const data = file
        .toString()
        .replace(
          '"test": "echo \\"Error: no test specified\\" && exit 1"',
          scripts,
        );
      fs.writeFile(packageJSON, data, (err2) => err2 || true);
    });

    const filesToCopy = ['.babelrc', '.eslintrc.json', '.prettierrc'];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(
        path.join(__dirname, `../${filesToCopy[i]}`),
      ).pipe(
        fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`),
      );
    }
    const folderToCopy = ['config'];
    for (let i = 0; i < folderToCopy.length; i += 1) {
      fs.copy(
        path.join(__dirname, `../${folderToCopy[i]}`),
        `${process.argv[2]}/${folderToCopy[i]}`,
      );
    }

    // Needless to say, npm will remove the .gitignore file when the package is installed,
    // therefore it cannot be copied locally and needs to be downloaded.
    // So, linking remote directory to fetch details of .gitignore
    https.get(
      'https://raw.githubusercontent.com/AmeerAsif777/create-app-react/main/.gitignore',
      (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (data) => {
          body += data;
        });
        res.on('end', () => {
          fs.writeFile(
            `${process.argv[2]}/.gitignore`,
            body,
            { encoding: 'utf-8' },
            (err) => {
              if (err) throw err;
            },
          );
        });
      },
    );

    console.log('npm init -- done\n');

    // Installing dependencies
    console.log(
      'Installing dependencies -- it might take a few minutes..\n',
    );
    console.log('Meanwhile, you can chat with your GF.. xd');
    console.log(
      "OMG !!! If you are a single like me, then I'm really sorry",
    );
    const devDeps = getDeps(packageJson.devDependencies);
    const deps = getDeps(packageJson.dependencies);
    exec(
      `cd ${process.argv[2]} && git init && node -v && npm -v && npm i -S ${deps} && npm i -D ${devDeps}`,
      (npmErr, npmStdout, npmStderr) => {
        if (npmErr) {
          console.error(`Some error while installing dependencies
      ${npmErr}`);
          return;
        }
        console.log(npmStdout);
        console.log('Dependencies installed successfully\n');

        console.log('Now Copying additional files..');
        // Copying additional source files such as html, js, css
        fs.copy(
          path.join(__dirname, '../src'),
          `${process.argv[2]}/src`,
        )
          .then(() => {
            console.log(
              `All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${process.argv[2]}\nnpm start`,
            );
            console.log('Thank me later bruhh\n\nHappy Coding !!!!');
          })
          .catch((err) => console.error(err));
      },
    );
  },
);
