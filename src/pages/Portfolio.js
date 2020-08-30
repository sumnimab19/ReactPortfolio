import React, { Component } from "react";
import projects from "../project.json";
import Project from "../components/Project"

class Portfolio extends Component {
  render() {
    return (
      <div class="row">
        <h1>Portfolio </h1>
          
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