# Session-2

## 1. NPM

_NPM is the Software Registry.Where we can download all npm public software packages without any registration or logon and also we can also register our package so that other developers can download and use with **npm i** command._

## 2. Need for Parcel/Webpack.

_Parcel/Webpack are open-source web bundler. They come with tools built-in like a **development server, diagnostics, minification**, and even **image compression**.They can also handle file types like images and fonts._

## 3. Parcel cache.

_Cache folder **(parcel-cache)** stores information about your project when parcel builds it,so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. This makes rebuilds faster._


## 4. NPX

npx is a npm package runner (x probably stands for eXecute). One common way to use npx is to download and run a package temporarily

## 5. Dependencies vs Dev dependencies

| dependencies  | devDependencies |
| ------------- |:-------------:|
| Dependencies which are also required at runtime.   | These packages are only required during development   |
|example: react, react-dom| example: parcel, node-sass


## 6. What is tree shaking

We use module bundlers (e.g., webpack) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

## 7. Hot Module Replacement.

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.

## 8. .gitigore

The purpose of gitignore file is to ensure that certain files not tracked by Git remain untracked.
Basically the folders/files that can be regenerated or need to be in local are mentioned in this file. 

example: node_modules, ide setting folder (.vscode), .env , build, cache folders etc.

## 9. package.json vs. package-lock.json

| package.json  | package-lock.json |
| ------------- |:-------------:|
|Here we specify all packages that can be installed with npm i command|This is solely used to lock dependencies to a specific version number.|
| They also contain specify project properties, description, author & license information, scripts | It describes the exact tree that was generated to allow subsequent installs to have the identical tree.|

## 10. node modules
 
 This is the folder generated when we install dependencies from npm. It contains different packages code and dependencies used by those packages(transitive dependencies).
 
 
## 11. dist folder
 The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.


## 12. browserlist

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

## 13. noscript tag

The <noscript> tag defines an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support script

## 14. manifest.json

Web app manifest files provide the capability to change how an installed application will look like on the user's desktop or mobile device. By modifying properties in the JSON file, you can modify a number of details in your application, including its:
Name,Description,App icon,Theme color etc.
