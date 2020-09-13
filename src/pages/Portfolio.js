import React, { Component } from "react";
import Project from "../components/Project";
import projects from "../project.json";


class Portfolio extends Component {
  render() {
    return (
      <div>
         <h1 className="text-info myHeader">Portfolio</h1>
         <hr></hr>  
          {projects.map(project => (
            // console.log(project.image)
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              repo={project.repo}
              url={project.url}
            />
          ))}
      </div>
    );
  }
}

export default Portfolio;