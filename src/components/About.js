import React from "react";
import { image } from "../data/data";

function About() {
  //const info = "I honestly love this, but it does get frustrating at times."
  return (
  <div id="about"> 
    <h2>About me</h2>
    <p>Love learn test so great</p>
    <img src={image} alt='I made this'></img>
  </div>
  )
}

export default About;
