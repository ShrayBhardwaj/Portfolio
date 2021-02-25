import React from 'react'
import {NavLink} from 'react-router-dom';
import "./About";

const Menu  = () => {
    return (
         <div className="deg-pro-me">
         
         <NavLink className ="nav" to ="/About"> Degree</NavLink>
        
         <NavLink className ="nav3" to ="/Intro"> About Me</NavLink>
         
         <NavLink className="nav2" to = "/Contact">Projects</NavLink>
         </div >
         
    )
    //
    //<a href = "/Contact">ContactUS</a> this 2 line out in return if you want to
}

export default Menu
