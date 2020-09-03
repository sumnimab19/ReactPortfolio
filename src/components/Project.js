import React from "react";
import {
  Card, CardLink,CardText, CardBody,
  CardTitle
} from 'reactstrap';

function Project(props) {
  // return (
    // <div className="col-4">
    //   <div className="card">
    //     <div className="img-container">
    //       <a href={props.url}><img className="card-img-top" alt={props.name} src={props.image} /></a>
    //     </div>
    //     <div className="card-body">

    //       <strong className="card-title">{props.name}</strong>
    //       <br />
    //       <a href={props.repo} class="btn btn-primary">Repo</a>
    //       <a href={props.url} class="btn btn-primary">URL</a>
    //     </div>

    //   </div>
    // </div>
    return (
      <div>
        <Card className = "myCard">
          <img className = "myImage" width="30%" src={props.image} alt={props.name} />
          <CardBody className = "cardBody">
            <CardTitle className ="title">{props.name}</CardTitle>
            <CardText className ="description">{props.description}</CardText>
            <CardLink className ="githubRepo" href={props.repo}>Github</CardLink>
            <CardLink className ="deployedApp"href={props.url}>Deployed App</CardLink>
          </CardBody>
        </Card>
      </div>
      
    );
  };
    


export default Project;
