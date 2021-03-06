# Part 1
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


### More Syntax
* `<h1 className="big">Hey</h1>`
* always need closing tags
* {} for js code inside JSX elements

### Variable attributes
```
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);
```

### Event Listeners
```
function myFunc() {
  alert('calling myFunc');
}

<img onClick={myFunc} />
```

* Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver

### Conditionals
```
let img;

if (coinToss() === 'heads') {
  img = (<img src={pics.kitty}/>);
} else {
  img = (<img src={pics.doggy} />);
}
```

### Ternary Operator
* https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript

`const img = <img src={pics[coinToss() === 'heads'? 'kitty' : 'doggy']} />;`
* use && when you want show element if true e.g. `{ !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}`

### .map
```
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
	<li>{person}</li>
);
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
```


### Keys
* A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.
* A list needs keys if either of the following are true:
1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
2. A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

```
const peopleLis = people.map((person, i) =>
	<li key={'person_' + i}>{person}</li>
);

```


# Part 2
## Advanced React
### States
* Stateless components inherit from stateful components
