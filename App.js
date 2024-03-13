// const parent = document.getElementById("root")
// const child = React.createElement("h1",{id:"heading",className:"mainHeading"},"Hello world From React!");
// const root = ReactDOM.createRoot(parent)
// root.render(child)

// console.log(child)
// console.log(root)

// Creating Nested elements

const parent = React.createElement(
    "div",{id:"parent"},[React.createElement(
        "div",{id:"child"},[React.createElement("h1",{id:"heading"},"It is a nested Component!"),
        React.createElement("h2",{id:"heading2"},"It is a nested Component!")]),
        React.createElement(
            "ol",{id:"child2"},[React.createElement("li",{id:"heading"},"It is a nested Component!"),
            React.createElement("li",{id:"heading2"},"It is a nested Component!")])]
)
console.log(parent)
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent)
