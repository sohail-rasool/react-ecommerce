import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='mt-5 footer py-4 text-center'>
      <Container>
        <Row>
          <Col>
            © Copyright {new Date().getFullYear()} Company Name. All rights
            reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
