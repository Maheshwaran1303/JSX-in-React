**Embedding Expressions in JSX** – one of the **core foundations of React**.

# 🔹 1. What is JSX Recap?

- JSX = **JavaScript XML**.
- It allows us to **write HTML inside JavaScript**.
- But JSX is **not a template language** — it’s just **syntactic sugar** for React.createElement.

# 🔹 2. Embedding Expressions in JSX

- In JSX, you can **embed any JavaScript expression** inside **curly braces { }**.
- Expressions can be:✅ Variables✅ Functions✅ Math operations✅ Conditional statements (ternary operator)✅ Function calls

# 🔹 3. Examples

### ✅ 1. Embedding Variables

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` function Greeting() {    const name = "Maheshwaran";    return   Hello, {name} 👋 ================  ;  } `

👉 Output: **Hello, Maheshwaran 👋**

### ✅ 2. Embedding Expressions

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` function MathExample() {    return   2 + 3 = {2 + 3}  ;  } `

👉 Output: **2 + 3 = 5**

### ✅ 3. Embedding Function Calls

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`` function getGreeting(name) {    return `Hello, ${name}!`;  }  function App() {    return   {getGreeting("Maheshwaran")} ----------------------------  ;  } ``

👉 Output: **Hello, Maheshwaran!**

### ✅ 4. Conditional Expressions (Ternary)

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` function UserStatus({ isLoggedIn }) {    return (        {isLoggedIn ? "Welcome back! 🎉" : "Please log in 🔑"}    );  } `

👉 If isLoggedIn = true → shows “Welcome back! 🎉”👉 Else → shows “Please log in 🔑”

### ✅ 5. Rendering Arrays

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` function Fruits() {    const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];    return (        {fruits.map((fruit, index) => (          *   {fruit}        ))}    );  } `

👉 Output:

- 🍎 Apple
- 🍌 Banana
- 🍇 Grapes

# 🔹 4. Rules of Embedding in JSX

❌ Cannot write if or for statements directly inside JSX.✅ Use expressions (ternary, map, function calls).✅ Always wrap JavaScript inside { }.

# 🔹 5. Real-Life Analogy 🏡

- JSX is like a **cake 🎂**.
- { } are like **pockets inside the cake**.
- You can put chocolate 🍫 (variables), cream 🍦 (functions), or fruit 🍓 (calculations) inside.

# 🔹 6. Interview Quick Points

- Expressions in JSX go inside { }.
- Valid: variables, function calls, math, ternary, map.
- Invalid: statements like if, for.
- Used for **dynamic UI rendering**.

✅ **Summary**

- JSX allows **embedding JavaScript expressions** inside { }.
- This makes UI **dynamic & interactive**.
- Most common use cases: **variables, functions, ternary conditions, loops with map()**.

**JSX Attributes** — they’re like **HTML attributes**, but with **React power**.

# 🔹 1. What are JSX Attributes?

- In **JSX**, attributes are written **similar to HTML**, but with **JavaScript expressions**.
- Syntax:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  Content  `

👉 Difference from HTML:

- In HTML: ![](image.png) (string only).
- In JSX: ![]({imageURL}) (expression inside { }).

# 🔹 2. Rules for JSX Attributes

✅ **CamelCase naming**

- HTML: class, for
- JSX: className, htmlFor

✅ **Expressions inside { }**

- You can pass numbers, variables, functions, objects.

✅ **Boolean shorthand**

- If an attribute is true, you can write it without value.

# 🔹 3. Examples

### ✅ 1. Passing Strings

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  function App() {    return   Hello React 🚀 ==============  ;  }  `

### ✅ 2. Using Variables

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  function UserProfile() {    const imageURL = "https://via.placeholder.com/150";    return ![Profile]({imageURL});  }  `

### ✅ 3. Expressions

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  function PriceTag() {    const price = 99;    return   Price: {price > 50 ? "Expensive 💰" : "Cheap 🪙"}  ;  }  `

### ✅ 4. Boolean Attributes

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  function Button() {    return Click Me; // disabled = true  }  `

👉 Equivalent to:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  Click Me  `

### ✅ 5. Inline Styling

In JSX, style is not a string but an **object**:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  function StyledText() {    return (        Hello Styled React 🎨    );  }  `

### ✅ 6. Dynamic Attributes

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  function DynamicLink() {    const link = "https://google.com";    return [Go to Google]({link});  }  `

# 🔹 4. Real-Life Analogy 🏡

- JSX attributes = **stickers on a box 📦**.
- Example:

  - fragile = true (handle carefully)
  - owner = "Maheshwaran" (label with name)
  - color = "red" (paint box red)

They **change how the box behaves or looks**, just like attributes in React.

# 🔹 5. Interview Quick Points

- JSX attributes look like HTML but use **camelCase**.
- Values can be **expressions inside { }**.
- Boolean attributes can be written as shorthand.
- Inline style in JSX uses an **object**.
- Special cases: className instead of class, htmlFor instead of for.

✅ **Summary**

- JSX attributes = HTML attributes + JavaScript power.
- Use { } to pass **variables, functions, expressions**.
- Supports **boolean shorthand** and **style objects**.


**Styling in JSX** — this is where React shines because you get **multiple flexible ways** to style your components.

🔹 1. Ways to Style in JSX
==========================

React supports **4 main styling techniques**:

1.  **Inline Styles** (using JavaScript objects)
    
2.  **CSS Stylesheets** (normal .css files)
    
3.  **CSS Modules** (scoped, unique class names)
    
4.  **Styled Components / CSS-in-JS** (library-based, like styled-components, emotion)
    

🔹 2. Inline Styles
===================

*   In JSX, the style attribute accepts a **JavaScript object**.
    
*   Properties use **camelCase** instead of kebab-case.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   function InlineStyle() {    return (        Inline Styled Text 🎨    );  }   `

👉 Notice:

*   "font-size" (CSS) → fontSize (JSX).
    
*   "background-color" (CSS) → backgroundColor (JSX).
    

🔹 3. External CSS (Global)
===========================

*   Create a .css file (e.g., App.css).
    
*   Import it in your component.
    

**App.css**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .title {    color: green;    text-align: center;  }   `

**App.jsx**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   import "./App.css";  function App() {    return   Styled with CSS File 🌍 =======================  ;  }   `

👉 className is used instead of class.

🔹 4. CSS Modules (Scoped CSS)
==============================

*   Avoids **class name conflicts** in large apps.
    
*   Filename should end with .module.css.
    

**Button.module.css**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   .btn {    background-color: purple;    color: white;    padding: 10px;    border-radius: 8px;  }   `

**Button.jsx**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   import styles from "./Button.module.css";  function Button() {    return Click Me 🎯;  }   `

👉 styles.btn is unique → no global conflict.

🔹 5. Styled Components (CSS-in-JS)
===================================

*   A popular library (styled-components) lets you write CSS directly in JavaScript.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML``   import styled from "styled-components";  const Title = styled.h1`    color: orange;    font-size: 28px;  `;  function App() {    return Styled with Styled-Components 🚀;  }   ``

👉 Styles are **scoped and dynamic**.

🔹 6. Dynamic Styling
=====================

You can apply styles **based on conditions**:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   function DynamicStyle({ isActive }) {    return (        {isActive ? "Active ✅" : "Inactive ❌"}    );  }   `

👉 If isActive = true → text is green.👉 If isActive = false → text is red.

🔹 7. Real-Life Analogy 🏡
==========================

*   Inline styles = writing notes directly on the box with a marker 🖊️.
    
*   CSS file = sticking a big label on all boxes 📦.
    
*   CSS Modules = giving each box a unique sticker 🎟️ (no mix-ups).
    
*   Styled Components = painting the box itself 🎨.
    

🔹 8. Interview Quick Points
============================

*   Inline styles use **objects with camelCase keys**.
    
*   className replaces class in JSX.
    
*   CSS Modules ensure **scoped, unique class names**.
    
*   Styled Components = popular **CSS-in-JS** library.
    
*   Dynamic styling can be applied using **conditions in JSX**.
    

✅ **Summary**

*   Styling in JSX is flexible: **Inline, External CSS, CSS Modules, Styled Components**.
    
*   Use **camelCase** for inline styles.
    
*   Prefer **CSS Modules or Styled Components** in large projects to avoid conflicts.