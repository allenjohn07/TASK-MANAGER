import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Foot.css'

function Foot() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h5>About Us</h5>
            <p>
              Task Manager helps you stay organized and productive by providing a simple yet powerful solution for managing tasks and projects.
            </p>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <h5>Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
              <li><a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a></li>
              <li><a href="/tasks" style={{ textDecoration: 'none', color: 'inherit' }}>Tasks</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <h5>Contact Us</h5>
            <ul style={{cursor:'pointer'}} className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: +123456789</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">&copy; 2024 Task Manager. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Foot;
