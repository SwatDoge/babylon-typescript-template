# BabylonJS Template

### A modification of kefniark's babylon template. (https://github.com/kefniark/babylon-typescript-template)

**See his demo here** : https://kefniark.github.io/babylon-typescript-template/dist/

Template modifications by me:
- Put stuff in seperate files
- Changed code syntax to my preferences
- Removed linter
- Added my own comments

---

## Contents

* BabylonJS
* Typescript
* Webpack

Export is configured as:
* Fixed ratio
* Optional developer Inspector
* ES6 (tree shaking + code splitting)

---

## Usage

### Install
```
npm install
```
 - clone this repository and run this command

### Dev
```
npm run dev
```
 - this will start a dev server on http://localhost:8080 (Port may vary, read your console output)

### Build
```
npm run build
```
 - this will compile the game into the `./dist/` folder
you can test it with `npm run local-server`
 - this will expose the build folder on http://localhost/
