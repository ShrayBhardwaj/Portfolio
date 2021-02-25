import React from 'react'
import "./About.css"

///in about we have the degree

const About = () => {
    
    return(
      <table className="table" >
      <thead className="thead">
        <tr>
          <th>#</th>
          <th>Degree</th>
          <th>School/University Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr>
          <td>1</td>
          <td>10Th</td>
          <td>Moti Ram Arya School</td>
          <td>70%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>12TH</td>
          <td>Moti Ram Arya School</td>
          <td>65%</td>
        </tr>
        <tr>
          <td>3</td>
          <td >B.E/B.Tech</td>
          <td >Chandigarh University</td>
          
          <td>6.5 CGPA</td>
        </tr>
      </tbody>
    </table>
          );

 };

export default About;
