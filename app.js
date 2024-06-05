import React from "react"
import ReactDOM from "react-dom" 
let num=2;
const HeadingComponent =()=>{
    return <h1>
        {console.log(num)}
        Yo Bro!!
    </h1>
}

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)