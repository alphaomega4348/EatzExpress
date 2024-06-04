const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"tt"},"I am H1"),React.createElement("h1",{id:"tu"},"I am H2")]
)
)
console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);