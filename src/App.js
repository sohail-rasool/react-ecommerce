import { Container, Row, Col } from 'react-bootstrap';
import Header from './layout/header/Header';

import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>overreacted</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
