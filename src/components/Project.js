import React from "react";
import {Card, CardLink,CardText, CardBody, CardTitle} from 'reactstrap';


function Project(props) {
  return (
      <div>
        <Card className="myCard contentImage">
          <img className="myImage" width="30%" src={props.image} alt={props.name} />
          {/* <img className = "myImage" width="30%" src={Images} alt={props.name} />  */}
            <CardBody className="cardBody">
              <CardTitle className="title">{props.name}</CardTitle>
              <CardText className="description">{props.description}</CardText>
              <CardLink className="githubRepo" href={props.repo}>Github</CardLink>
              <CardLink className="deployedApp" href={props.url}>Deployed App</CardLink>
            </CardBody>
        </Card>
      </div>
    );
  };
    
export default Project;
