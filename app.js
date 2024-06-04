import React from "react"
import ReactDOM from "react-dom" 
for(let i=0;i<1000;i++){

}
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"tt"},"I am H1"),React.createElement("h1",{id:"tu"},"I am H2")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"tt"},"I am H1"),React.createElement("h1",{id:"tu"},"I am H2")]
)] //Since it's messy so jsx is used.
)

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);