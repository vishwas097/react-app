const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "header1" }, "Hello World"),
        React.createElement("h1", { id: "header2" }, "Hello World2")]),

    React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "header3" }, "Hello World3"),
        React.createElement("h1", { id: "header4" }, "Hello World4")])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);