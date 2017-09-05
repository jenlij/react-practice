## Why React?
* Fast: complex updates
* Modular: small, reusable files. easier to maintain
* Scalable: good for large programs that display lots of changing data
* Flexible: can be used for non-web applications
* Popular: Used in many companies' production code

### Intro to JSX
* Syntax extension for JS
* Looks like HTML
* JS files containing JSX must be complied before rendered in the browser

### JSX elements
* JSX elements are treated as JS expressions. Can be saved in a variable, passed to a function, stored in objects...
* `const navBar = <nav>Nav Bar</nav>;`

### JSX Attributes
* my-attribute-name = "my-attribute-value"
* `const title = <h1 id="title">Title</h1>;`
* attributes can be nested
* if JSX expression is multi-line, wrap in ()
* must have EXACTLY ONE outermost element. i.e. everything must be within an outer div of some sort

### Rendering JSX
* `ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));`




## Advanced React
### States
* Stateless components inherit from stateful components
* `import React from 'react'; import ReactDOM from 'react-dom';`
```
var myList = (
  <ul>
    <li>One</li>
  	<li>Two</li>
    <li>Three</li>
  </ul>);

ReactDOM.render(
  myList, 
  document.getElementById('app')
);
```

* ReactDOM.render() only updates DOM elements that have changed
* if you render the same thing twice in a row, the second render won't do anything
* https://www.codecademy.com/articles/react-virtual-dom
* By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called "diffing."
* Here's what happens when you try to update the DOM in React:
1. The entire virtual DOM gets updated.
2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3. The changed objects, and the changed objects only, get updated on the real DOM.
4. Changes on the real DOM cause the screen to change.

