import React from 'react'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ImageFooter from "../../images/mylogo.png";
import "./style.css"

const Footer = () => {
  return (
    <Row className="justify-content-center p-3 myFooter">
      <h5 className="footerText">Made with ❤️️ by</h5>
      <img src={ImageFooter} alt="My Logo" className="myLogo"/>
    </Row>
  )
}

export default Footer