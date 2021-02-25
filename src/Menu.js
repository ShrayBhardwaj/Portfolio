import React from 'react'
import {NavLink} from 'react-router-dom';

const Menu  = () => {
    return (
                 <>
         <NavLink className="Header" to = "/">Shray Bhardwaj</NavLink>
         <NavLink className ="nav" to ="/About"> About us</NavLink>
         <NavLink className="nav2" to = "/Contact"> Contact us</NavLink>
         </ >
         
    )
    //
    //<a href = "/Contact">ContactUS</a> this 2 line out in return if you want to
}

export default Menu
