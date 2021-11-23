import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AuthPageStyles.css';

const Signup = () => {
  return (
    <Row>
      <Col md={6}>
        <h1 className='mb-5'>Sigin up</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className='form-input'
              type='text'
              placeholder='Name'
            />
          </Form.Group>
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
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className='form-input'
              type='password'
              placeholder='Confirm Password'
            />
          </Form.Group>
          <Button variant='dark' type='submit'>
            Sign up
          </Button>
        </Form>
        <p className='mt-3'>
          <span>Already have account ?</span>
          <Link className='btn btn-outline-primary ms-2' to='/signin'>
            Sign in
          </Link>
        </p>
      </Col>
    </Row>
  );
};

export default Signup;
