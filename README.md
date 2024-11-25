# How to Create a Component in React.js

React components can be created in two ways:

1. **Class Components** (not recommended by React developers).
2. **Function Components** (recommended due to simplicity and modern standards).

This guide demonstrates how to create a **Class Component**.

---

## Steps to Create a Class Component

### Step 1: Create the Class

Define a class for your component. For example, we will call it `MyFirstComponent`.
The `render` method inside the class is responsible for returning the HTML content:

```javascript
class MyFirstComponent {
  render() {
    return <div>Hello, this is my first component in React.js!</div>;
  }
}
```

### Step 2: Import React

Before defining the class, you need to import React and the `Component` class:

```javascript
import { Component } from "react";
```

Update the class to extend `Component`:

```javascript
class MyFirstComponent extends Component {
  render() {
    return <div>Hello, this is my first component in React.js!</div>;
  }
}
```

### Step 3: Export the Component

To use this component in other files, export it. You can export in two ways:

1. **Named Export**:

   ```javascript
   export { MyFirstComponent };
   ```

2. **Default Export** (recommended for simplicity):
   ```javascript
   export default MyFirstComponent;
   ```

### Step 4: Import and Use the Component

To use your component in another file (e.g., `index.js`), import it like this:

- Without `default`:

  ```javascript
  import { MyFirstComponent } from "./MyFirstComponent";
  ```

- With `default`:
  ```javascript
  import MyFirstComponent from "./MyFirstComponent";
  ```

Then, use the component like an HTML tag:

```javascript
import MyFirstComponent from "./MyFirstComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MyFirstComponent />);
```

---

## Running the Application

1. Start your development server:
   ```bash
   npm start
   ```
2. Navigate to http://localhost:3000 in your browser to see your component in action.

---

## Notes

- Using `export default` simplifies importing as you don't need curly braces `{}`.
- Functional components are preferred in modern React development for their simplicity and support for hooks.

---

Congratulations! You've successfully created and used a React class component.

## Steps to Create a Function Component

### Step 1: Declare the Function Component

To start, declare the function that will represent your component. Here's an empty function component:

```javascript
function MyFirstComponent() {
  // Component logic will go here
}
```

### Step 2: Return the JSX

Next, return the JSX that you want to render on the page. This will be similar to HTML, but in JSX syntax:

```javascript
function MyFirstComponent() {
  return <div>Hello, this is my first component in React.js!</div>;
}
```

### Step 3: Export the Function Component

To use the function component in other files, you need to export it. There are two ways to do this:

1. **Named Export**:
   With a named export, you explicitly name the component when exporting it, and you must use the same name when importing.

   #### Example:

   ```javascript
   export function MyFirstComponent() {
     return <div>Hello, this is my first component in React.js!</div>;
   }
   ```

2. **Default Export**: (Recommended)
   The default export allows you to export a single component without explicitly naming it. This approach is simpler and more commonly used in React because it reduces the need to match names between the export and import statements.

   #### Example:

   ```javascript
   export default MyFirstComponent;
   ```

### Step 4: Import and Use the Component

Once your function component is exported, you can import it and use it in other files (e.g., `index.js` or `App.js`).

#### Without Default Export:

If you used a **named export**, you must import the component using the same name:

```javascript
import { MyFirstComponent } from "./MyFirstComponent";
```

#### With Default Export:

If you used a **default export**, you can import the component without the curly braces:

```javascript
import MyFirstComponent from "./MyFirstComponent";
```

You can now use the component like an HTML tag:

```javascript
import MyFirstComponent from "./MyFirstComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyFirstComponent />);
```

### Step 5: Run the Application

To run your React application and see the component rendered in the browser:

1. Open your terminal and run the following command:

```bash
npm start
```

2. Navigate to http://localhost:3000 in your browser to see your component in action.

Congratulations! You've successfully created and used a React function component.

### Why Use Function Components?

Function components are preferred for most modern React development because of the following reasons:

- **Simplicity**:
  Function components are more concise and easier to understand compared to class components. They allow you to write less code while still achieving the same functionality.

- **Hooks**:
  Function components enable the use of React hooks like `useState`, `useEffect`, and others. These hooks provide powerful features such as state management and side effects, without needing to rely on class components.

### Summary

- **Create the component** by declaring a function.
- **Return JSX** to define the HTML structure.
- **Export** the component to use it in other files.
- **Import and render** the component wherever needed in your React app.
- **Run your app** with `npm start` to view the component on the page.

### End

This documentation was created by **Abdessamad Kech-Chaf**.

Special thanks to my classmate and my big brother **Ismail** for their help and support.

good luck with your react journey