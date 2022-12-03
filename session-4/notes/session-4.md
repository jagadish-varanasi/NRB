# Session-4

## 1. Pure function

_A Pure Function is a function that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution._

## 2. React Fragment

_React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component._

## 3. Use of default in export default ComponentName

_Default export - is the value that will be imported from the module, if you use the simple import statement import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, and it doesn't have to be named like the origin export. There can be only one default export._

## 4. Config driven UI

_Here UI can be changed by changing the configuration in server without new deployment_

## 5. what if we have given same id in aray of objects.

_A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.
If we have same id and we are using that id as key,then react would warn us "Encountered two children with the same key"._

## 6. Index is not good way to pass as key.

_a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before (bcz as we are using index) React assumes that the DOM element represents the same component as before. But that is no longer true._
