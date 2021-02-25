import React from 'react'
import "./Header.css";
//import ReactStars from "react-star-rating";


const Header = () => {
    
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    </meta>
    

    return (

        <div className="Header">
         <h1 className="h1">Shray Bhardwaj</h1>
         <p className ="mail"> Shray2037@gmail.com <br /> 9023689908 <br /></p>
         <h2 className="h2">Objective :) </h2>
         <div className="para">
         <p>Able. I am able to handle multiple tasks on a daily basis.
Creative. I use a creative approach to problem solve.
Dependable. I am a dependable person who is great at time management.
Energetic. I am always energetic and eager to learn new skills.</p>
         </div>
        
         <h3 className="hskills">My Skills</h3>
         

<p> HTML </p>
<div class="container">
  <div class="skills html">90%</div>
</div>

<p>CSS</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p>JavaScript</p>
<div class="container">
  <div class="skills js">65%</div>
</div>

<p>DOCKER</p>
<div class="container">
  <div class="skills php">60%</div>
</div>
<br />
        </div>
    )
}

export default Header
