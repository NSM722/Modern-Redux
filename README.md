# Modern Redux ToolKit and React App

[FCC Redux Toolkit Read](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)

This template shows how redux-toolkit simplifies the previous `Redux boilerplate` code

[Dogs as a service API](https://thedogapi.com/ "read docs")

There's currently a bug in reading the API data

## Starter Vite Template

```js
npm create vite@latest

√ Project name: ... redux-toolkit
√ Select a framework: » React
√ Select a variant: » TypeScript

Done. Now run:

  cd redux-toolkit
  npm install
  npm run dev

```

## Install Redux Toolkit(Beta Version) & AXIOS

```js
$ npm i @reduxjs/toolkit@next react-redux axios
```

`configureStore` function is a wrapper around the basic createStore() function provided by Redux
It automatically sets up a Redux store with the right tools:

- including Redux DevTools integration
- the thunk middleware for handling asynchronous actions
- development checks like immutability and TypeScript support
