# QuickParcelProject with Parcel, Sass, React and Jest

![GitHub version](https://img.shields.io/github/package-json/v/pantaflex44/QuickParcelProject)
![GitHub last commit](https://img.shields.io/github/last-commit/pantaflex44/QuickParcelProject)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/pantaflex44/QuickParcelProject)


![GitHub release](https://img.shields.io/github/downloads/pantaflex44/QuickParcelProject/total)
![GitHub license](https://img.shields.io/github/license/pantaflex44/QuickParcelProject)
![GitHub stars](https://img.shields.io/github/stars/pantaflex44/QuickParcelProject)

Create a project with Parcel, Sass, React and Jest quickly.<br />


**Actual: 3.1.2 : React 18.0.2 support!**
```bash
 dayjs                         ^1.11.2  →  ^1.11.5
 parcel                         ^2.5.0  →   ^2.7.0
 puppeteer                     ^14.1.0  →  ^17.1.2
 react                         ^18.1.0  →  ^18.2.0
 react-dom                     ^18.1.0  →  ^18.2.0
 sass                          ^1.51.0  →  ^1.54.9
 @babel/core                  ^7.17.10  →  ^7.19.0
 @babel/preset-env            ^7.17.10  →  ^7.19.0
 @babel/preset-react           ^7.16.7  →  ^7.18.6
 @parcel/babel-preset-env       ^2.5.0  →   ^2.7.0
 @parcel/transformer-postcss    ^2.5.0  →   ^2.7.0
 @parcel/transformer-sass       ^2.5.0  →   ^2.7.0
 @testing-library/dom          ^8.13.0  →  ^8.17.1
 @testing-library/jest-dom     ^5.16.4  →  ^5.16.5
 @testing-library/react        ^13.2.0  →  ^13.4.0
 @types/jest                   ^27.5.1  →  ^29.0.0
 autoprefixer                  ^10.4.7  →  ^10.4.8
 babel-jest                    ^28.1.0  →  ^29.0.2
 eslint-plugin-react-hooks      ^4.5.0  →   ^4.6.0
 helmet                         ^5.0.2  →   ^6.0.0
 jest                          ^28.1.0  →  ^29.0.2
 react-icons                    ^4.3.1  →   ^4.4.0
 react-test-renderer           ^18.1.0  →  ^18.2.0
 react-transition-group         ^4.4.2  →   ^4.4.5
 replace-in-file                ^6.3.2  →   ^6.3.5
```


## Get QuickParcelProject

Simple way, **Git clone**

```bash
mkdir MyProject
cd MyProject
git clone https://github.com/pantaflex44/QuickParcelProject .
rm -rf .git
```
or **Download** project from Github

```bash
wget https://github.com/pantaflex44/QuickParcelProject/archive/refs/heads/main.zip
unzip -o main.zip
mv QuickParcelProject-main MyProject
rm -rf main.zip
cd MyProject
```

## Short description

QuickParcelProject use Parcel to build Web app with Sass and React modules.

The Jest module is used to test your scripts.

CSS generated files, use Sass and AutoPrefixer module. JS and CSS files are minified in 'production' mode.

## Installation and Usage

Before continue, verify if Node.js and NPM module are intalled

```bash
node -v
npm -v
```

You can use Yarn if you want.

### First install all dependencies

```bash
npm install
```

### In development mode you can run Parcel with Hot reload

```bash
npm run dev
```

Default browser automaticaly opened to http://localhost:1234. Hot reload activated.

### Build package for production

```bash
npm run build
```
'dist' folder automaticaly cleaned and new versionned files built. Your React app is ready to use with an external server (because a React router is used in the 'main.jsx').

'dist' folder now contains your app to deploy.

### Test your Parcel's built files

```bash
npm run serve
```

Default browser open a new tab and load http://localhost:8080...<br />
Yeah! Your web app running with succes, you're the best [*sister*|*brother*]<br />
*Ready to deploy!*

### Run tests with Jest

```bash
npm run test
```

### Watch all changes and run tests imediately

```bash
npm run test-watch
```

### Clean the 'dist' folder

```bash
npm run clean
```

### Entry point

The main entry point is **index.html**.

**JSX** extension isn't mandatory, you could use **JS** too.

Free of use!

## Author and Copyright

Christophe LEMOINE

pantaflex at tuta point io

Licence: MIT
