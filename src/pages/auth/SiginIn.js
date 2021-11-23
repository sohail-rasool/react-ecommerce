import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../services/firebase/firebase.utils';
import './AuthPageStyles.css';

const SiginIn = () => {
  return (
    <Row>
      <Col md={6}>
        <h1 className='mb-5'>Sigin In</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className='form-input'
              type='email'
              placeholder='Enter email'
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className='form-input'
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Button className='me-3' variant='dark' type='submit'>
            Sign in
          </Button>
          <Button variant='primary' type='button' onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </Form>
        <p className='mt-3'>
          <span>Don't have an account yet</span>
          <Link className='btn btn-outline-primary ms-2' to='/signup'>
            Sign up
          </Link>
        </p>
      </Col>
    </Row>
  );
};

export default SiginIn;
