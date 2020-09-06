import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

const Footer = () => {
  return (
    <Row className=" justify-content-center p-3 myFooter">
      <h5 class="footerText">Made with ❤️️ by</h5>
      <img 
          src="/images/myLogo.png"
          alt="My Logo"
          className = "myLogo"/>
    </Row>
  )
}

export default Footer