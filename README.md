**Embedding Expressions in JSX** -- one of the **core foundations of React**.

* * * * *

🔹 1. What is JSX Recap?
========================

-   JSX = **JavaScript XML**.

-   It allows us to **write HTML inside JavaScript**.

-   But JSX is **not a template language** --- it's just **syntactic sugar** for `React.createElement`.

* * * * *

🔹 2. Embedding Expressions in JSX
==================================

-   In JSX, you can **embed any JavaScript expression** inside **curly braces `{ }`**.

-   Expressions can be:\
    ✅ Variables\
    ✅ Functions\
    ✅ Math operations\
    ✅ Conditional statements (ternary operator)\
    ✅ Function calls

* * * * *

🔹 3. Examples
==============

### ✅ 1. Embedding Variables

```
function Greeting() {
  const name = "Maheshwaran";
  return <h1>Hello, {name} 👋</h1>;
}

```

👉 Output: **Hello, Maheshwaran 👋**

* * * * *

### ✅ 2. Embedding Expressions

```
function MathExample() {
  return <p>2 + 3 = {2 + 3}</p>;
}

```

👉 Output: **2 + 3 = 5**

* * * * *

### ✅ 3. Embedding Function Calls

```
function getGreeting(name) {
  return `Hello, ${name}!`;
}

function App() {
  return <h2>{getGreeting("Maheshwaran")}</h2>;
}

```

👉 Output: **Hello, Maheshwaran!**

* * * * *

### ✅ 4. Conditional Expressions (Ternary)

```
function UserStatus({ isLoggedIn }) {
  return (
    <p>
      {isLoggedIn ? "Welcome back! 🎉" : "Please log in 🔑"}
    </p>
  );
}

```

👉 If `isLoggedIn = true` → shows "Welcome back! 🎉"\
👉 Else → shows "Please log in 🔑"

* * * * *

### ✅ 5. Rendering Arrays

```
function Fruits() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

```

👉 Output:

-   🍎 Apple

-   🍌 Banana

-   🍇 Grapes

* * * * *

🔹 4. Rules of Embedding in JSX
===============================

❌ Cannot write `if` or `for` statements directly inside JSX.\
✅ Use expressions (ternary, map, function calls).\
✅ Always wrap JavaScript inside `{ }`.

* * * * *

🔹 5. Real-Life Analogy 🏡
==========================

-   JSX is like a **cake 🎂**.

-   `{ }` are like **pockets inside the cake**.

-   You can put chocolate 🍫 (variables), cream 🍦 (functions), or fruit 🍓 (calculations) inside.

* * * * *

🔹 6. Interview Quick Points
============================

-   Expressions in JSX go inside `{ }`.

-   Valid: variables, function calls, math, ternary, `map`.

-   Invalid: statements like `if`, `for`.

-   Used for **dynamic UI rendering**.

* * * * *

✅ **Summary**

-   JSX allows **embedding JavaScript expressions** inside `{ }`.

-   This makes UI **dynamic & interactive**.

-   Most common use cases: **variables, functions, ternary conditions, loops with `map()`**.

* * * * *



**JSX Attributes** --- they're like **HTML attributes**, but with **React power**.

* * * * *

🔹 1. What are JSX Attributes?
==============================

-   In **JSX**, attributes are written **similar to HTML**, but with **JavaScript expressions**.

-   Syntax:

```
<tag attributeName={expression}>Content</tag>

```

👉 Difference from HTML:

-   In HTML: `<img src="image.png" />` (string only).

-   In JSX: `<img src={imageURL} />` (expression inside `{ }`).

* * * * *

🔹 2. Rules for JSX Attributes
==============================

✅ **CamelCase naming**

-   HTML: `class`, `for`

-   JSX: `className`, `htmlFor`

✅ **Expressions inside `{ }`**

-   You can pass numbers, variables, functions, objects.

✅ **Boolean shorthand**

-   If an attribute is `true`, you can write it without value.

* * * * *

🔹 3. Examples
==============

### ✅ 1. Passing Strings

```
function App() {
  return <h1 title="Welcome">Hello React 🚀</h1>;
}

```

* * * * *

### ✅ 2. Using Variables

```
function UserProfile() {
  const imageURL = "https://via.placeholder.com/150";
  return <img src={imageURL} alt="Profile" />;
}

```

* * * * *

### ✅ 3. Expressions

```
function PriceTag() {
  const price = 99;
  return <p>Price: {price > 50 ? "Expensive 💰" : "Cheap 🪙"}</p>;
}

```

* * * * *

### ✅ 4. Boolean Attributes

```
function Button() {
  return <button disabled>Click Me</button>; // disabled = true
}

```

👉 Equivalent to:

```
<button disabled={true}>Click Me</button>

```

* * * * *

### ✅ 5. Inline Styling

In JSX, `style` is not a string but an **object**:

```
function StyledText() {
  return (
    <p style={{ color: "blue", fontSize: "20px" }}>
      Hello Styled React 🎨
    </p>
  );
}

```

* * * * *

### ✅ 6. Dynamic Attributes

```
function DynamicLink() {
  const link = "https://google.com";
  return <a href={link} target="_blank">Go to Google</a>;
}

```

* * * * *

🔹 4. Real-Life Analogy 🏡
==========================

-   JSX attributes = **stickers on a box 📦**.

-   Example:

    -   `fragile = true` (handle carefully)

    -   `owner = "Maheshwaran"` (label with name)

    -   `color = "red"` (paint box red)

They **change how the box behaves or looks**, just like attributes in React.

* * * * *

🔹 5. Interview Quick Points
============================

-   JSX attributes look like HTML but use **camelCase**.

-   Values can be **expressions inside `{ }`**.

-   Boolean attributes can be written as shorthand.

-   Inline `style` in JSX uses an **object**.

-   Special cases: `className` instead of `class`, `htmlFor` instead of `for`.

* * * * *

✅ **Summary**

-   JSX attributes = HTML attributes + JavaScript power.

-   Use `{ }` to pass **variables, functions, expressions**.

-   Supports **boolean shorthand** and **style objects**.

* * * * *


**Styling in JSX** --- this is where React shines because you get **multiple flexible ways** to style your components.

* * * * *

🔹 1. Ways to Style in JSX
==========================

React supports **4 main styling techniques**:

1.  **Inline Styles** (using JavaScript objects)

2.  **CSS Stylesheets** (normal `.css` files)


2.  **CSS Stylesheets** (normal `.css` files)

3.  **CSS Modules** (scoped, unique class names)

4.  **Styled Components / CSS-in-JS** (library-based, like `styled-components`, `emotion`)

* * * * *

4.  **Styled Components / CSS-in-JS** (library-based, like `styled-components`, `emotion`)

* * * * *

🔹 2. Inline Styles
===================

-   In JSX, the `style` attribute accepts a **JavaScript object**.

-   Properties use **camelCase** instead of kebab-case.

```
function InlineStyle() {
  return (
    <h1 style={{ color: "blue", fontSize: "30px", backgroundColor: "yellow" }}>
      Inline Styled Text 🎨
    </h1>
  );
}

```
-   In JSX, the `style` attribute accepts a **JavaScript object**.

-   Properties use **camelCase** instead of kebab-case.

```
function InlineStyle() {
  return (
    <h1 style={{ color: "blue", fontSize: "30px", backgroundColor: "yellow" }}>
      Inline Styled Text 🎨
    </h1>
  );
}

```

👉 Notice:

-   `"font-size"` (CSS) → `fontSize` (JSX).

-   `"background-color"` (CSS) → `backgroundColor` (JSX).

* * * * *
-   `"font-size"` (CSS) → `fontSize` (JSX).

-   `"background-color"` (CSS) → `backgroundColor` (JSX).

* * * * *

🔹 3. External CSS (Global)
===========================

-   Create a `.css` file (e.g., `App.css`).

-   Import it in your component.
-   Create a `.css` file (e.g., `App.css`).

-   Import it in your component.

**App.css**

```
.title {
  color: green;
  text-align: center;
}

```
```
.title {
  color: green;
  text-align: center;
}

```

**App.jsx**

```
import "./App.css";

function App() {
  return <h1 className="title">Styled with CSS File 🌍</h1>;
}

```
```
import "./App.css";

function App() {
  return <h1 className="title">Styled with CSS File 🌍</h1>;
}

```

👉 `className` is used instead of `class`.

* * * * *
👉 `className` is used instead of `class`.

* * * * *

🔹 4. CSS Modules (Scoped CSS)
==============================

-   Avoids **class name conflicts** in large apps.

-   Filename should end with `.module.css`.
-   Avoids **class name conflicts** in large apps.

-   Filename should end with `.module.css`.

**Button.module.css**

```
.btn {
  background-color: purple;
  color: white;
  padding: 10px;
  border-radius: 8px;
}

```
```
.btn {
  background-color: purple;
  color: white;
  padding: 10px;
  border-radius: 8px;
}

```

**Button.jsx**

```
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click Me 🎯</button>;
}

```
```
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click Me 🎯</button>;
}

```

👉 `styles.btn` is unique → no global conflict.

* * * * *
👉 `styles.btn` is unique → no global conflict.

* * * * *

🔹 5. Styled Components (CSS-in-JS)
===================================

-   A popular library (`styled-components`) lets you write CSS directly in JavaScript.

```
import styled from "styled-components";

const Title = styled.h1`
  color: orange;
  font-size: 28px;
`;

function App() {
  return <Title>Styled with Styled-Components 🚀</Title>;
}

```
-   A popular library (`styled-components`) lets you write CSS directly in JavaScript.

```
import styled from "styled-components";

const Title = styled.h1`
  color: orange;
  font-size: 28px;
`;

function App() {
  return <Title>Styled with Styled-Components 🚀</Title>;
}

```

👉 Styles are **scoped and dynamic**.

* * * * *

* * * * *

🔹 6. Dynamic Styling
=====================

You can apply styles **based on conditions**:

```
function DynamicStyle({ isActive }) {
  return (
    <p style={{ color: isActive ? "green" : "red" }}>
      {isActive ? "Active ✅" : "Inactive ❌"}
    </p>
  );
}

```
```
function DynamicStyle({ isActive }) {
  return (
    <p style={{ color: isActive ? "green" : "red" }}>
      {isActive ? "Active ✅" : "Inactive ❌"}
    </p>
  );
}

```

👉 If `isActive = true` → text is green.\
👉 If `isActive = false` → text is red.

* * * * *
👉 If `isActive = true` → text is green.\
👉 If `isActive = false` → text is red.

* * * * *

🔹 7. Real-Life Analogy 🏡
==========================

-   Inline styles = writing notes directly on the box with a marker 🖊️.

-   CSS file = sticking a big label on all boxes 📦.

-   CSS Modules = giving each box a unique sticker 🎟️ (no mix-ups).

-   Styled Components = painting the box itself 🎨.

* * * * *
-   Inline styles = writing notes directly on the box with a marker 🖊️.

-   CSS file = sticking a big label on all boxes 📦.

-   CSS Modules = giving each box a unique sticker 🎟️ (no mix-ups).

-   Styled Components = painting the box itself 🎨.

* * * * *

🔹 8. Interview Quick Points
============================

-   Inline styles use **objects with camelCase keys**.

-   `className` replaces `class` in JSX.

-   CSS Modules ensure **scoped, unique class names**.

-   Styled Components = popular **CSS-in-JS** library.

-   Dynamic styling can be applied using **conditions in JSX**.

* * * * *
-   Inline styles use **objects with camelCase keys**.

-   `className` replaces `class` in JSX.

-   CSS Modules ensure **scoped, unique class names**.

-   Styled Components = popular **CSS-in-JS** library.

-   Dynamic styling can be applied using **conditions in JSX**.

* * * * *

✅ **Summary**

-   Styling in JSX is flexible: **Inline, External CSS, CSS Modules, Styled Components**.

-   Use **camelCase** for inline styles.

-   Prefer **CSS Modules or Styled Components** in large projects to avoid conflicts.

* * * * *

