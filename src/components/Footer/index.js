import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

const Footer = () => {
  return (
    <footer className="mt-5">
    <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
            
            <Col className="p-0 d-flex justify-content-center" md={3}>
            <p class="connect">Connect with me via</p>
         
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sumnima-bhandari-706765196/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square linkedin" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/sumnimab19" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square github" aria-hidden="true" />
          </a>

   

            </Col>
        </Row>
    </Container>
</footer>
  )
}

export default Footer