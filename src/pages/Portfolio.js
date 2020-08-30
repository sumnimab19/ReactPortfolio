import React, { Component } from "react";
import projects from "../project.json";
import Project from "../components/Project"

class Portfolio extends Component {
  render() {
    return (
     
 <div>
       
         <h1 class="mt-4 pt-4 text-info myHeader">Portfolio</h1>
     
         <hr></hr>
                    
              
          {projects.map(project => (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              repo={project.repo}
              url={project.url}
            />
          ))}
     
         </div>
  
      
    );
  }
}


export default Portfolio;