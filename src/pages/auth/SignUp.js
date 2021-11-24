import React,{useRef} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AuthPageStyles.css';
import { auth, createUserProfileDocument } from '../../services/firebase/firebase.utils';

const Signup = () => {

  let userName = useRef(null)
  let emailAddress = useRef(null)
  let passwordEntered = useRef(null)
  let confirmPasswordEntered = useRef(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    let displayName = userName.current.value
    let userEmail = emailAddress.current.value
    let userPassword = passwordEntered.current.value
    let userConfirmPassword = confirmPasswordEntered.current.value

    if(userPassword !== userConfirmPassword) {
      alert('password should be equal')
      return
    }
    try {
     await auth.createUserWithEmailAndPassword(userEmail, userPassword).then((userCredential) => {
      const user = userCredential.user;
      createUserProfileDocument(user,{displayName})
    })
     
     
    userName.current.value = ''
     emailAddress.current.value = ''
     passwordEntered.current.value = ''
     confirmPasswordEntered.current.value = ''
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Row>
      <Col md={6}>
        <h1 className='mb-5'>Sigin up</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className='form-input'
              type='text'
              placeholder='Name'
              ref={userName}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className='form-input'
              type='email'
              placeholder='Enter email'
              ref={emailAddress}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Form.Group className='mb-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className='form-input'
              type='password'
              placeholder='Confirm Password'
              ref={confirmPasswordEntered}
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
