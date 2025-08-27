/*
In JSX, attributes are written similar to HTML, but with JavaScript expressions.

Syntax:
<tag attributeName={expression}>Content</tag>

Difference from HTML:

In HTML: <img src="image.png" /> (string only).

In JSX: <img src={imageURL} /> (expression inside { }).


Rules for JSX Attributes

CamelCase naming

HTML: class, for

JSX: className, htmlFor

Expressions inside { }

You can pass numbers, variables, functions, objects.

Boolean shorthand

If an attribute is true, you can write it without value.

*/

// Passing Strings in JSX Attribute
/*
function JSXAttribute() {
    return (
        <div>
            <h1 title="Welcome">Passing Strings in JSX Attribute</h1>
        </div>
    )
}
*/

// Passing Variables in JSX Attribute
/*
function JSXAttribute() {
    const profile = "src/assets/profile.jpg";

    return (
        <div>
            <img src={profile} alt="Profile" />
        </div>
    )
}
*/

// Expression
/*
function JSXAttribute() {
    const price = 1000;

    return (
        <div>
            <p>Price: {price > 500 ? "Expensive" : "Cheap"}</p>
        </div>
    ) 
}
*/

// Boolean
/*
function JSXAttribute() {
  return <button disabled>Click Me</button>; // disabled = true
}
*/

// Inline Styling

// In JSX, style is not a string but an object

/*
function JSXAttribute() {
    return (
        <div style={
                { 
                    backgroundColor: "blue",
                    color: "white", 
                    fontSize: "20px" 
                }
            }>
            Hello Styled JSX 
        </div>
    );
}
*/

// Adding ClassName and External CSS

/*
import "./style.css";

function JSXAttribute() {
    return (
        <div className="container">
            <h1>Adding ClassName in JSX</h1>
        </div>
    )
}
*/


// Dynamic Attributes

/*
function JSXAttribute() {
    const link = "https://youtube.com";

    return (
        <div>
            <a href={link} target="_blank">Go to Youtube</a>
        </div>
    )
}
*/


// htmlFor

/*
function JSXAttribute () {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" />
        </div>
    )
}
*/


// Summary

/*
JSX attributes look like HTML but use camelCase.

Values can be expressions inside { }.

Boolean attributes can be written as shorthand.

Inline style in JSX uses an object.

Special cases: className instead of class, htmlFor instead of for

*/


export default JSXAttribute;
