import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithGoogle, auth } from '../../services/firebase/firebase.utils';
import './AuthPageStyles.css';
import Loader from '../../components/Loader/Loader';

const SiginIn = () => {
  const [loading, setLoading] = useState(false);
  const emailAddress = useRef('');
  const passwordEntered = useRef('');
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let userEmail = emailAddress.current.value;
    let userPassword = passwordEntered.current.value;
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(userEmail, userPassword);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };
  return (
    <Row>
      <Col md={6}>
        <h1 className='mb-5'>Sigin In</h1>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className='form-input'
              type='email'
              placeholder='Enter email'
              ref={emailAddress}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className='form-input'
              type='password'
              placeholder='Password'
              ref={passwordEntered}
            />
          </Form.Group>
          <Button
            className='me-3'
            variant='dark'
            type='submit'
            disabled={loading}
          >
            {loading ? <Loader /> : 'Sign In'}
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
