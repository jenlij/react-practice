## Why React?
* Fast: complex updates
* Modular: small, reusable files. easier to maintain
* Scalable: good for large programs that display lots of changing data
* Flexible: can be used for non-web applications
* Popular: Used in many companies' production code

## Intro to JSX
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