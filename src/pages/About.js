import React from "react";
import Image from "../images/myPic.jpg";


function About() {
  return (
    <div className="about"> 
      <h1 className="text-info myHeader">About Me</h1>
      <hr></hr>
        <img src={Image} alt="My Picture" className="myPic"/>
    
        <p className="myParagraph">
            Welcome to Sumnima's page. Sumnima is an aspiring full stack web developer and an experienced Software Quality Assurance Analyst / Epic Application Analyst. She believes in continuous learning.
            She is currently enrolled in University of Arizona Coding Bootcamp to learn the latest coding technologies and utilize those to solve problems. 
            Sumnima lives in Oro Valley, Arizona with her husband and their daughter.
        
        </p>
        <p className="myParagraph">
            She loves biking, hiking, volley ball, watching movies, playing games with her family in free time. 
         </p>
    </div>
  );

}

export default About;