Great progression, Maheshwaran! 🌟\
Now let's learn **Styling in JSX** --- this is where React shines because you get **multiple flexible ways** to style your components.

* * * * *

🔹 1. Ways to Style in JSX
==========================

React supports **4 main styling techniques**:

1.  **Inline Styles** (using JavaScript objects)

2.  **CSS Stylesheets** (normal `.css` files)

3.  **CSS Modules** (scoped, unique class names)

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

👉 Notice:

-   `"font-size"` (CSS) → `fontSize` (JSX).

-   `"background-color"` (CSS) → `backgroundColor` (JSX).

* * * * *

🔹 3. External CSS (Global)
===========================

-   Create a `.css` file (e.g., `App.css`).

-   Import it in your component.

**App.css**

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

👉 `className` is used instead of `class`.

* * * * *

🔹 4. CSS Modules (Scoped CSS)
==============================

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

**Button.jsx**

```
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click Me 🎯</button>;
}

```

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

👉 Styles are **scoped and dynamic**.

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

🔹 8. Interview Quick Points
============================

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

👉 Maheshwaran, do you want me to next explain **Handling Events in JSX (onClick, onChange, etc.)**?
