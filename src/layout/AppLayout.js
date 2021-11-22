import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import React from 'react';

function AppLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <main className='mt-5'>
          <Container>
            <Row>
              <Col>{children}</Col>
            </Row>
          </Container>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
