/* <div id="parent">
    <div id="child">
        <h1>

        </h1>
    </div>
</div> */

const root=ReactDOM.createRoot(document.getElementById("root"));
  const parent=React.createElement(
    "div",
    {"id":"parent"},
    [
        React.createElement("div",{"id":"child1"},
            [
                React.createElement("h1",{},"I'm h1 tag"),
                React.createElement("h2",{},"I'm h2 tag")
            ]),
        React.createElement("div",{"id":"child2"},
        [
            React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I'm h2 tag")
        ])
    ]
);

console.log(parent);
root.render(parent);


const header=React.createElement(
    "h1",
    {"id":"header"},
    "Hello World From React !"
);

console.log(header); //It will provide the JS Object 
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(header);  // Render will held to convert the JS Object to tag and placed it in the root(DOM)