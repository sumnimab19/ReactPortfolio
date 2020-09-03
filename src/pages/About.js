import React from "react";

function About() {
  return (
    <div className = "about"> 
      <h1 class="text-info myHeader">About Me</h1>
      <hr></hr>
      <img 
        src="/images/myPic.jpg"
        alt="My Picture"
        className = "myPic"/>
        
        <p class="myParagraph">
            Welcome to my page. I am an experienced Software Quality Assurance Analyst who has 4+ years of testing experience in HealthCare Software. I am currently enrolled in University of Arizona Coding Bootcamp. I would like to build a stunning website for my Dad and some 
            useful apps for myself with the help of the knowledge I gather from this bootcamp.
        </p>
        <p class="myParagraph">
            I love biking, hiking, volley ball, gardening, watching movies, playing games with my family in free time. 
         </p>
    </div>
  );

}

export default About;