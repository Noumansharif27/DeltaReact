# REACT JS

What is React JS?

https://github.com/Noumansharif27/DeltaReact.git

A JS library which is use to Make UI/FrontEnd developed my Meta in 2013

> In React **Funtions** gets called while **Components** gets invoke/render.

## Component:

A component is a piece of the UI (user interface) that has its own lagic and apperance. A component can be as small as a button, or as large as an entire page.

```jsx
function MyButtom() {
	return (
		<button>I'm a buttom</button>
		);
)
```

~~as per the code above we can clearly see that React is the combination of HTML, JS and CSS~~

JSX code can never be run in a .JS file

> **Babel:** A transfiler/Compiler which converts/translates the JSX code into JS

Vite - 2020 (launched)

## Setup:

```bash
npm create vite@latest
```

<aside>
💡

1. you will be prompted to give the application a name, what technology/framework you wanna use **e.g.** VueJS, React etc …
2. What language you wanna use? Type Script? JS?
3. What Linter to use? ESLint
4. Install dependencies with npm and start the server? Yes
</aside>

In the above image we can clearly see the Boilerplate for our React application.

**Focus** on the **src** folder we have a files named: **App.jsx & main.jsx**

> App.jsx: this file is where we write our component embed it from a different file.

> Main.jsx: This file is not be messed with it renders the App.jsx into our index,html

### Import & Export

```js
import component from "./component.jsx";
```

> While importing a defaut export we can give our component a different name as well
> e.g.

```js
import component1 from "./component.jsx";
```

#### Export

```js
export default component;
```

> We use this export line when we only have once component in our file for export.

#### Name export

```js
export { component };
import { component } from "./component.jsx";
```

> We should use parenthesis when we are imorting a <b>name export<b/>.

### Markup/Rules in JSX

1. Return a single root element.

> In JSX we are supposed to return a single root element, if we have mor then one element to return then we should wrap that element in a parrent <b>Div</b>.

2. Close all tags.

> We should close all tags we use in our JSX cause when <b>Bable</b> is translating the code it looks for the closing tags and without it we would be getting errors.

3. CamelCase most of the time.

> While efining the variable or even writing some CSS attributes we should use CamelCase for that.
> e.g.

```js
<div className="parent"></div>
```

> In JavaScript the word <b>class</b> is a reserved keyword for OPPs classes, so in JSX we use className as an alternative for that matter.

### React Fragments (<></>)

Fragments lets you group a list of children without adding extra nodes to the DOM

#### e.g.

```js
return (
  <div>
    <Component0 />
    <Component1 />
  </div>
);
```

> As of our above code when it gets render we would be dealing with n extra node after our <b>Root</b>, to solve this we would use React Fragments (<></>)

```js
return (
  <>
    <Component0 />
    <Component1 />
  </>
);
```

> React Fragment is just an emptry pair of tags which works as a parent tags to group a set of tags without creating an exter nodes in or DOM.

### JSX in curly braces

> Every code written inside of the curly braces would be treated as a pure JavaScript code.
> e.g.

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

`Create a seprate file for a component and if we have to bundle that component for repetation we should create an other file for that  bundelling then.`

### React Props:

> Props are the information that you pass to a JSX tag.

```jsx
import Product from "./Product.jsx";

function ProductTab() {
  return (
    <>
      <Product tittle="Laptop" price={40000} />
      <Product tittle="Mobile" price={30000} />
      <Product tittle="Pen" price={10} />
    </>
  );
}

export default ProductTab;
```

```jsx
import "./Product.css";

function Product(Props) {
  return (
    <div className="Product">
      <h1>{Props.tittle}</h1>
      <p>{Props.price}</p>
    </div>
  );
}

export default Product;
```

In the above example our props are treated as an object in the component file, we can use object key method to display its value.

```jsx
import "./Product.css";

function Product({ tittle, price }) {
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
    </div>
  );
}

export default Product;
```

Now in this of code we exactly known our props and instead of using object.key method we are directly using the parameters/Props to display our dynamic values.

> As you may had noticed in props we have to use “” Quotation marks to pass down our String value while or our numbers we have to use curly braces { } for that.

### Passing Arrays & Objects to Props:

```jsx
import Product from "./Product.jsx";

function ProductTab() {
  let options = ["high-tech", "durable", "fast"];
  let options2 = { a: "high-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        tittle="Laptop"
        price={40000}
        feature={options}
        feature2={options2}
      />
    </>
  );
}

export default ProductTab;
```

```jsx
import "./Product.css";

function Product({ tittle, price, feature, feature2 }) {
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
      <p>{feature}</p>
      <p>{feature2.a}</p>
    </div>
  );
}

export default Product;
```

As you can see we just have to use braces to pass array or object in props, Mostly instead of defining the arrays and objects seprately before passing them we can dirrectly pass them, e.g.

```jsx
<Product
  tittle="Laptop"
  price={40000}
  feature={["hightech", "durable", "fast"]}
/>
```

`Our output would look like something like that`

<img src="./basic-react-app/public/array&objectInProps.png" alt="Image of an example output of Array and object's output in props"/>

`In the abve output you may see tha although we had pass our arrays individual elements in props but we can see that all the items are not seprated by commas`

Rendering array

> To Render array in a different format then a long string, like we may want each of its element to be render in a un-ordered list, or as a seprate element itself, we have `2` different ways to achieve that.

> e.g.
> Instead of sending just array's value we can send array of element/array of HTML elements

```jsx
function ProductTab() {
  let options = [<li>"high-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
  return (
    <>
      <Product tittle="Laptop" price={40000} feature={options} />
    </>
  );
}

export default ProductTab;
```

> As of our above code we can see that we first convert out arrays individual elements into HTML element before sending it as a props, This method is good but here we have do to the changes manually each time for every elements which can be quite of exhausting and timetaking, now instead of doing it manually we will try `2nd method` of doing that.

```jsx
function ProductTab() {
  let options = ["high-tech", "durable", "fast"];
  let UpdatedOptions = options.map((feature) => <li>{feature}</li>);
  return (
    <>
      <Product tittle="Laptop" price={40000} feature={UpdatedOptions} />
    </>
  );
}

export default ProductTab;
```

> Now in this example we use `.map()` function of array to convert each of the array's element into an HTML element.Now instead of creating a whole new variable for that work we can directly use our method inside props which will catch the return value of our method and print it our as we wanted.

```jsx
function ProductTab() {
  let options = ["high-tech", "durable", "fast"];
  return (
    <>
      <Product tittle="Laptop" price={40000} features={options} />
    </>
  );
}

export default ProductTab;

// Inside Product.JSX file

import "./Product.css";

function Product({ tittle, price,features }) {
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
      <p>{features.map((feature) => (
          <li>{feature}</li>
        ))}</p>
    </div>
  );
}

export default Product;

```

> Now this code is more readable and clean.

### Conditionals

> We can use condition like if else, or ternary Operators to perform a specific task.

```js
import "./Product.css";

function Product({ tittle, price }) {
  let isDiscount = price >= 40000 ? <p>Discount 5%</p> : null;
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
      {isDiscount}
    </div>
  );
}

export default Product;
```

`We cannot put <b>" "</b> Empty string in out tru or fasle performance are as it will create an empty element in DOM.`

> we can also use the condition in inline-method which will be more efficient as we wouldn't have to create an etra variable.

```js
{
  price >= 40000 ? <p>Discount 5%</p> : null;
}
```

#### && operator

```jsx
{
  price >= 40000 && <p>Discount 5%</p>;
}
```

> Now instead of using turnary operator normaly we can use `&&` as a condition which will only work when our first condition is correct and will move and to perform the tast if our condition is incorrect it will ignore the task and the code would jump to the next line.

### Dynamic Component Styling

```jsx
function Product({ tittle, price }) {
  let isDiscount = price >= 30000;
  let styles = { backgroundColor: isDiscount ? "pink" : "yellow" };
  return (
    <div className="Product" style={styles}>
      <h1>{tittle}</h1>
      <p>{price}</p>
      {isDiscount && <p>Discount 5%</p>}
    </div>
  );
}

export default Product;
```

> Using condition in JSX we can dynamically style our component as we want.

### Handeling Clicks element

> To add the functionaliy of `addEvenetListener` like in JavaScript, we use `onClick` to add functionality in our React components.

```jsx
function Button() {
  let print = () => {
    console.log("Hello World!");
  };

  let mouseOverHandeler = () => {
    console.log("Bye!");
  };

  let doubleClickHandeler = () => {
    console.log("You Dubble Clicked!");
  };

  return (
    <>
      <button onClick={print}>Cick me!</button>
      <p onMouseOver={mouseOverHandeler}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
        laboriosam autem earum commodi sit molestias totam quasi tempore
        delectus nam tenetur, dolorem repellendus ex quia? Sequi architecto
        libero vitae ad? Ratione, repellendus sequi, tenetur est natus veniam
        fugit nemo tempore quod, nesciunt ad veritatis laboriosam quam
        cupiditate adipisci nostrum consectetur repellat porro quaerat eligendi
        numquam! Eius, natus nobis. Deleniti, harum! Esse, nulla sunt temporibus
        quae tempora aperiam porro itaque. Labore laboriosam porro ipsum quia
        unde optio explicabo, excepturi libero saepe quasi! Distinctio pariatur
        excepturi veniam, quaerat commodi consequuntur eveniet obcaecati? A
        dicta consequuntur corporis omnis optio, sapiente amet deserunt id in
        ducimus tenetur sunt eaque perferendis ullam cupiditate perspiciatis
        consectetur neque cum adipisci blanditiis magni quisquam iste! Ex,
        molestias iusto. Qui rerum nulla vel alias. Atque ullam nobis doloribus
        vero vel provident est animi quis corrupti maxime perspiciatis quos
        molestias blanditiis, eius qui, reprehenderit porro officia earum
        quaerat laboriosam. Sapiente.
      </p>
      <button onDoubleClick={doubleClickHandeler}>Dubble Click me!</button>
    </>
  );
}

export default Button;
```

> never put your function in the event arrtibute as a Executable, `onMouseOver={functionName()}` as it will result in function getting automattically trigger own its own at the starting of the code and you will not be able to use it again dynamically, so always pass the function non-executable e.g. `onMouseOver={functionName}`

### Event Object

> Whenever we create an evenHandler an object labeled `event` gets automatically passed into our handler which has alot of detail about the event, like what even accured, to whome etc ...

```jsx
export default function Form() {
  let onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Gets Submited!");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}
```

> You may had noticed in the above mentioned coee that we used a function called as `event.preventDefault()` it is because when we create a form in JSX it has predefined some event associated to it, and by using this function we prevent those event from happening and we only define our own event we want to run on the form.

### State in React

> The state is a build-in React object that is used to contain data or information about the compinent. A component's state can change over time; whenever it changes, the component re-renders.

```jsx
import "./App.css";

function App() {
  let count = 0;

  let inCount = () => {
    count += 1;
    console.log(count);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={inCount}>+1</button>
    </>
  );
}

export default App;
```

### Hooks

> Hools were a new additon in React 16.8 (at arround 2019).

> They let you help to use states and other React features without writing a class, Basically when react was launched we use `class components` insead of `functional component` as now and because class had some features which are not available in functions we got hooks to use them.

### useState(0)

> useState is a React Hook that lets you add a state variable to your component.

```jsx
consr[(state, setState)] = useState(initialState);
```

`UseState resturns an array with exactly two values:

1.The current state. uring the first rendering, it will match the initialState you have passed 2. The set function that lets you update the state to a different value and trigger a re-rendering`

```jsx
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let inCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={inCount}>+1</button>
    </>
  );
}

export default App;
```

``The Re-rendering in JSX works differet using closure so when you see your count = 1 but the print value shows 0 and on count = 2 print is 1'
