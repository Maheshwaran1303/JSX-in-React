// Embedding Expressions in JSX
/*
In JSX, you can embed any JavaScript expression inside curly braces { }

This makes UI dynamic & interactive.

Most common use cases: variables, functions, ternary conditions, loops with map()
*/

// 1. Embedding Variables
/*
function JSXEmbedding() {
    const name = "Maheshwaran";
    const age = 25;
    return (
        <h1>
            Hello, I am {name}! My age is {age}.
        </h1>
    );
}
*/

// 2. Embedding Expressions
/*
function JSXEmbedding() {
    return <p>2 + 3 = {2 + 3}</p>;
}
*/

// 3. Embedding Function Calls
/*
function JSXEmbedding(name) {
    return `Hello, ${name}`;
}

function App() {
    return (
        <>
            <h2> {JSXEmbedding("Maheshwaran")} </h2>
        </>
    );
}
*/

// 4. Conditional Expressions (Ternary)
/*
function JSXEmbedding(isLoggedIn) {
    return (
        <p>
            {isLoggedIn ? "Welcome back!" : "Please log in"}
        </p>
    );
}
*/

// 5. Rendering Arrays
/*
function JSXEmbedding() {
    const fruits = ["Apple", "Banana", "Grapes"];
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}
*/

export default JSXEmbedding;
