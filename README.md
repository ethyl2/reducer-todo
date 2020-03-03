# Katniss' Todo App

This project is deployed at http://katniss-todo.surge.sh/

It uses the reducer pattern for state management, with thee useReducer() hook.

-----------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# Module Project: The Reducer Pattern - Reducer Todo

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored the reducer pattern. During the module, you studied what immutability is, what reducers, actions and dispatch are, and how to use the reducer hook. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

### Description

In this project, you build an app that let's you display a todo list from reducer state, and update todo items as completed and clear completed todos from the list by dispatching different actions.

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd reducer-todo`
- [ ] Create a new react app using CRA
- [ ] Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

## Minimum Viable Product

1. Set an initial state value through a reducer and render a list of todos from that state
1. Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list
1. Build a function that let's you mark todo items as completed when you click on them
1. Biuld a function that let's you clear completed todos when you click on a "Clear Completed" button

### STEP 1 - Build a simple reducer and initial state

- In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
- In the same file, build your initial state object that has a list of todos with the following shape:

```js
{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}
```

- Export both the reducer and the initial state object

### STEP 2 - Set up state in your component

You get to choose how you want to set up your components. Please don't just do this all inside App. I know it is a small and simple project, but you will do yourself a great service by setting your app up as if it were going to be a larger application

- Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
- Now render your list of todos from your reducer in your app

### STEP 3 - Adding todos

- Build a form to add todos to your list
- Build a function that will dispatch an action to add a new todo
- Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

### STEP 4 - Toggle the completed field

- Build a function that will dispatch an action to toggle a todo's completed field
- Invoke this new function when you click on a todo
- Style your todo to somehow show that it is completed (be creative here!)
- Write the `case` in your reducer for toggling the completed property

### STEP 5 - Clearing completed todos

- Build a function that will dispatch an action to filter out any completed todos
- Invoke this new function when you click on a "Clear completed" button
- Write the `case` in your reducer for filtering completed todos

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Add the moment library to show in "human speak" when a todo was completed
- Add a property on the todos for when a todo should be completed by. Then display that a todo is "overdue" if it has not been completed by its due date
- Add "tags" to your todos, and display them with your todo list
- Have fun with the styling. Make this something you'd be proud to show off!
