## Overview

This repository contains the projects built during, [React the Complete Guide Including Redux](https://www.udemy.com/react-the-complete-guide-incl-redux) course available on Udemy.
**This is a personal project created while following along with the course and is not affiliated with the actual course in any way**. The primary goal of this repository is to serve as a future reference when building applications with ReactJS and Redux.

This repository is structured to have each course section within its own branch. Once a section is 
complete, then it will be merged back down into master. Because sections 1-3 focus on
bootstraping the application, they will not have their own branch.

## Sections

### Section 3: Understanding the Base Features & Syntax

* Bootstrapped application using [create-react-app](https://github.com/facebook/create-react-app)
* Functional and class based Components
* Nesting child elements with the children property
* State management within class components
* Passing event callbacks
* Defining inline and stylesheet styles
* Two-way data binding
* [Practice assignment](https://github.com/masterwok/udemy-react/tree/master/assignment-one)
* Helpful links:
  * [create-react-app](https://github.com/facebookincubator/create-react-app)
  * [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
  * [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
  * [Components & Props](https://reactjs.org/docs/components-and-props.html)
  * [Listenable Events](http://reactjs.org/docs/events.html)

### Section 4: Working with Lists and Conditionals

* Rendering dynamic content conditionally in JSX
* Handling dynamic content using "The JavaScript Way" in JSX
* Rendering lists using JavaScript in JSX
* Providing state to list items (callbacks, properties, etc.)
* The importance of updating state immutably
* How to provide keys to list components to optimize rendering state updates
* [Practice assignment](https://github.com/masterwok/udemy-react/tree/master/assignment-two)
* Helpful links:
  * [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
  * [Lists & Keys](https://reactjs.org/docs/lists-and-keys.html)

### Section 5: Styling React Components & Elements

* Setting styles dynamically
* Settings Class Names Dynamically
* Adding and Using Radium
* Using Radium for media queries
* Enabiling & Using CSS Modules
* Adding psuedo selectors
* Working with media queries
* Helpful links:
  * [Enabling CSS Modules (without eject) in create-react-app Projects](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
  * [Using CSS Modules in create-react-app Projects](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)
  * [More Information on CSS Modules)](https://github.com/css-modules/css-modules)

### Section 6: Debugging React Apps

* Overview of error boundary components to catch failing components
* Debugging react applications using React Dev Tools
* Helpful links:
  * [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
  * [Chrome DevTool Debugging](https://developers.google.com/web/tools/chrome-devtools/javascript/)
  * [Debugging create-react-app Applications with WebStorm](https://blog.jetbrains.com/webstorm/2017/01/debugging-react-apps/)


### Section 7: Diving Deeper into Components & React Internals

* Component lifecycles
* Stateless vs Stateful components
* Performance gains using PureComponents and React.memo()
* How React updates the component tree
* Creating higher order components (HOCs) to wrap components
* The empty <></> tag for returning non-nested elements in JSX
* How to use setState() correctly when referencing previous state (avoid race conditions)
* Validation props using prop-types
* Using component references both externally and internally
* Using React.createRef() to create a reference that can be set using the ref attribute on a component
* Using the Context API for global state to avoid the number of properties to pass down (should be used sparingly)
* Helpful links:
  * [State & Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
  * [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
  * [Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
  * [Refs](https://reactjs.org/docs/refs-and-the-dom.html)

### Section 8: A Real App: The Burger Builder (Basic Version)

* How to plan the layout of a React application
* How to plan the state of a React application
* How to structure a React application
* Implementing sidebards, backdrops, toolbars, dynamic components, controls, etc.


