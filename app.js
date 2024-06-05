import React from "react"
import ReactDOM from "react-dom"

const Header=()=>(

    <div className="header">
        <div className="logo-container">
        <img className="logo" src= "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>
)


const AppLayout=()=>(
        <div className="APP">
            <Header/>
        </div>

)




const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)