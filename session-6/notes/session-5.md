# Session-5

## 1. JSON vs Javascript Object.

_JSON is a data interchange format. It's a standard which describes how ordered lists and unordered maps, strings, booleans and numbers can be represented in a string. Just like XML and YAML is a way to pass structured information between languages, JSON is the same. A JavaScript object on the other hand is a physical type. Just like a C++ class/ struct, a JavaScript object is a type internal to JavaScript._

## 2. Default export and named export

_With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.One can have only one default export per file. When we import we have to specify a name and import_

## 3. What is Higher order component with example.

_A higher-order component is a function that takes a component and returns a new component.
React’s Higher Order Component is a pattern that stems from React’s nature that privileges composition over inheritance._

```import {useEffect, useState} from 'react';

// Target Component
function Clock({ time }) {
  return <h1>{time}</h1>
}

// HOC
function app(C) {
  return (props) => {
    const [time, setTime] = useState(new Date().toUTCString());
    useEffect(() => {
      setTimeout(() => setTime(new Date().toUTCString()), 1000);
    })
    return <C {...props} time={time}/>
  }
}

export default app(Clock);
```

## 4. Advantages of using form.

_First it’s semantic html and google takes that into account._

_Second what if you have a page with multiple inputs that are needed for various things? The form “groups” the specific inputs into a single group and attaches them to a specific set of buttons. You can do this with JavaScript by accessing the DOM but it’s much more complicated and semantically incorrect. Plus it’s a lot more code to get functionality that’s already included in the browser_

_Third, forms are the standard methodology for soliciting and capturing dynamic user input on the web. If the input is the same in ever case you would simply use a link and preload the query string with that input._

_Forms are a semantic block structure that can be used to target/control the design elements of a section of your page so that it stands out as obviously one entity (thereby prompting users to fill out the entire thing)_

## 5. Pure component.

_A React component is considered pure if it renders the same output for the same state and props._

## 6. State in react.
_The state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time. The change in state over time can happen as a response to user action or system event. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. They are also responsible for making a component dynamic and interactive._

## 7. what is e.preventDefault()
_The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.

## 8. what is includes.
_The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate._

## 9. Various ways of adding images in react app.

* Using the import Keyword
* Using the require Keyword
* Adding Network Images


