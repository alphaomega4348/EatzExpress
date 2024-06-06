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

const ResturantCard=()=>(
    <div className="res-card">
        <img src="https://media.radissonhotels.net/image/radisson-blu-metropol-hotel-helsingborg/miscellaneous/16256-116535-f64660969_3xl.jpg"/>
        <h3>Radisson Blu</h3>
        <h4>North Indian,Pacifian</h4>
        <h4>4.8⭐️</h4>
        <h5>24 mins</h5>
    </div>
)

const Body=()=>(
    <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
       < ResturantCard/>
       < ResturantCard/>
       < ResturantCard/>
       < ResturantCard/>
       < ResturantCard/>
       < ResturantCard/>
       < ResturantCard/>
       < ResturantCard/>
       

        </div>
    </div>
)


const AppLayout=()=>(
        <div className="APP">
            <Header/>
            <Body/>
        </div>

)




const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)