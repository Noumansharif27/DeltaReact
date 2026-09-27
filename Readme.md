#React

### Import & Export

```js
import component from "./component.jsx"
```

> While importing a defaut export we can give our component a different name as well
e.g.
```js
import component1 from "./component.jsx"
```

#### Export
```js
export default component
```

> We use this export line when we only have once component in our file for export.

#### Name export

```js
export {component};
import {component} from "./component.jsx" 
```

> We should use parenthesis when we are imorting a <b>name export<b/>.

### Markup/Rules in JSX

1. Return a single root element.

> In JSX we are supposed to return a single root element, if we have mor then one element to return then we should wrap that element in a parrent <b>Div</b>.

2. Close all tags.

> We should close all tags we use in our JSX cause when <b>Bable</b> is translating the code it looks for the closing tags and without it we would be getting errors.

3. CamelCase most of the time.

> While efining the variable or even writing some CSS attributes we should use CamelCase for that.
e.g.
```js
<div className="parent"></div>
```

> In  JavaScript the word <b>class</b> is a reserved keyword for OPPs classes, so in JSX we use className as an alternative for that matter.

### React Fragments (<></>)

Fragments lets you group a list of children without adding extra nodes to the DOM

#### e.g.
```js
return (
    <div>
        <Component0 />
        <Component1 />
    </div>
)
```

> As of our above code when it gets render we would be dealing with n extra node after our <b>Root</b>, to solve this we would use React Fragments (<></>)

```js
return (
    <>
     <Component0 />
     <Component1 />
    </>
)
```

> React Fragment is just an emptry pair of tags which works as a parent tags to group a set of tags without creating an exter nodes in or DOM.

### JSX in curly braces
> Every code written inside of the curly braces would b treated as a pure JavaScript code.
e.g.

```js
function App() {
    let name: "Shradhs";
    return (
        <>
         <p>2 * 2 = {2 * 2}</p>
         <h4>Hi, {name}</h4>
         <p>2 * 2 = {2 * 2}</p>
         <h4>Hi, {name}</h4>
        </>
    )
```