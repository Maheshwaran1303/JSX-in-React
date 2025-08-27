/*
Ways to Style in JSX

React supports 4 main styling techniques:

Inline Styles (using JavaScript objects)

CSS Stylesheets (normal .css files)

CSS Modules (scoped, unique class names)

Styled Components / CSS-in-JS (library-based, like styled-components, emotion)

*/

// Inline Styles

/*
function JSXStyle() {
    return (
        <div style={
                { 
                    backgroundColor: "blue",
                    color: "white", 
                    fontSize: "20px" 
                }
            }>
            <h3>Inline Styles</h3>
            <ul>
                <li>In JSX, the style attribute accepts a JavaScript object.</li>
                <li>Properties use camelCase instead of kebab-case.</li>
            </ul>
        </div>
    );
}
*/

// External CSS

/*
import "./JSXStyle.css"

function JSXStyle() {
    return (
        <div className="container">
            <h3>External CSS</h3>
            <ul>
                <li>Create a .css file (e.g., style.css / JSXStyle.css)</li>
                <li>Import it in your component. (e.g., import "./style.css" / import "./JSXStyle.css")</li>
            </ul>
        </div>
    );
}
*/

// CSS Modules (Scoped CSS)

/*
import styles from "./JSXStyle.module.css";

function JSXStyle() {
    return (
        <div className={styles.container}>
            <h3>CSS Modules</h3>
            <ul>
                <li>Use CSS Modules to style your components.</li>
                <li>Each module has its own unique class names.</li>
            </ul>
        </div>
    );
}
*/

// Styled Components (CSS-in-JS)

/*
import styled from "styled-components";

const Container = styled.div`
    background-color: yellow;
    color: black;
`;

const UnorderedList = styled.ul`
    list-style-type: none;
`;

const ListedItem = styled.li`
    color: blue;
`;

function JSXStyle() {
    return (
        <Container>
            <h3>Styled Components</h3>
            <UnorderedList>
                <ListedItem>A popular library (styled-components) lets you write CSS directly in JavaScript.</ListedItem>
                <ListedItem>npm install styled-components</ListedItem>
                <ListedItem>Styled components allow you to create reusable styles.</ListedItem>
            </UnorderedList>
        </Container>
    );
}
*/
export default JSXStyle;
