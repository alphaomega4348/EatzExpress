import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
const AppLayout = () => {
  return (
    <>
     <Header/>
      <Body />
      <Footer/>
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>

  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);