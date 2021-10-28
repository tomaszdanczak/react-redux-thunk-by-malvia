# React-Redux-Thunk by Malvia

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb061da2-94ed-43b2-8402-655c382344b8/deploy-status)](https://app.netlify.com/sites/peaceful-stonebraker-2b7f86/deploys)

## About the project

Test project for practicising the usage of redux and redux-thunk architecture inside of the React apps.

# Materials used

- [Learn React Redux with Project](https://www.youtube.com/watch?v=0W6i5LYKCSI)
- [Learn React Redux Thunk with Project](https://www.youtube.com/watch?v=JDZRfLGNWdc)
- [Deploy React Redux Application to Netlify](https://www.youtube.com/watch?v=GqrKlAKOSoc) by [Dipesh Malvia](https://www.youtube.com/channel/UChPxqdfDbulLE9PyUqhijWw)

![App]() // Add static links here

## Live Preview

[DEMO 🚀](https://peaceful-stonebraker-2b7f86.netlify.app/)

## Installation

1. Clone this repository
2. In the command line type `npm install` in the project root folder
3. Then `npm start` to start the project locally

## 🎓 Lessons learned

- 🌱 how to build architecture of [redux](https://redux.js.org/) applications
- 🌱 how to move api data fetching logic from component to Action Creator using [redux-thunk](https://github.com/reduxjs/redux-thunk)
- 🌱 how to deploy application automatically using [Netlify](https://www.netlify.com/) (based on changes in github repository)

## 🚧 My contributions to the project

### 🔴 [Tailwind CSS](https://tailwindcss.com) used instead global styles from index.css and [Semantic UI](https://semantic-ui.com/)

The whole project has been rebuilt with [Tailwind CSS](https://tailwindcss.com) and more complicated components were created with [styled-components](https://styled-comnts.com/). Additionally, media query were used with Tailwind.

### 🔴 Refactored Redux structure

The structure of the data in Redux was reorganised, reducers and action creators separated to the separate files. Moreover, naming of the variables changed to make the whole code even more readable.

### 🔴 New components added and some structure changed

New components:

- `<MainLayout />`
- `<Card />`
- `<Loading />`

Structure improvements in the following components:

- `<ProductsPage />`
- `<ProductDetailsPage />`

## ⌨️ Code example

- ### Tailwind CSS
  Tailwind CSS is a modern CSS forwork with a growing popularity, that changes the way we work with CSS in our projects. With Tailwind we can write, read and edit styles faster. Additionally, the styles the Tailwind provides are beautiful and customizable.

`Example of Tailwind usage in Card.jsx:`

```jsx
export default function Card({ children }) {
  return (
    <div className='w-full px-10 sm:px-0 sm:w-6/12 lg:w-4/12 xl:w-3/12 '>
      <div className='pb-8 sm:mx-4 h-full'>
        <div className='shadow border-2 rounded-md h-full transition transform hover:-translate-y-1 '>
          {children}
        </div>
      </div>
    </div>
  );
}
```

`Example of usage Tailwind in Header.jsx:`

```jsx
export default function Header() {
  return (
    <div className='fixed inset-0 w-full z-50 h-14 pt-3 bg-white border shadow'>
      <div className='w-full md:w-11/12 md:my-0 md:mx-auto lg:w-9/12'>
        <h2 className='text-2xl font-medium'>FakeShop</h2>
      </div>
    </div>
  );
}
```

- ### Reducer
  Destructurisation used on the object passed to the Reducer, so type and payload are available directly. Object ActionTypes is imported to prevent spelling mistakes and duplication of action types.

```jsx
import { ActionTypes } from "../constants/action-types";

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_SELECTED_PRODUCT:
      return { ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
```

## 📺 Screenshot GIFs

### Queries to API using axios

![App Network]() // Add static links here

### Media queries using Tailwind CSS

![Mediaqueries]() // Add static links here
