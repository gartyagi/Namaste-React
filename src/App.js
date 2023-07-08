// hot module reloading 

import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Components/Home/Header"
import {Body} from "./Components/Home/Body"
import Footer from "./Components/Home/Footer"

//LAYOUT
/*
            Header: 
                Logo
                NavBar(Right Side)
                Cart
            Body:
                Search Bar
                RestarauntList:
                    ResterauntCard:
                        image
                        Name
                        Rating
                        Cuisines
            Footer:
                Links
                Copyright

        */

// only one valid jsx tag available
const AppLayout = () => {
    return  (
        <>
            <Header />
            <Body />
            <Footer /> 
        </>
    )
};




  // as we are modifying DOM, in react we have to assign root to something
  const root = ReactDOM.createRoot(document.getElementById("root"));
//   console.log(header);
  // passing a react element and render updates the DOM,
  // note, if we have anything in the "root" div, then react replaces them with the element it is rendering
//   root.render(header);  
  root.render(<AppLayout/>);  