import { Card, Button, Form } from 'react-bootstrap';
import { useRef } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  const submitFormHandler = (e) => {
    e.preventDefault();
    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    console.log(titleRef.current.value);
    console.log(openingTextRef.current.value);
    console.log(releaseDateRef.current.value);
    onAddMovie(movie);
  };
  return (
    <Card>
      <Card.Body>
        <Form onSubmit={submitFormHandler}>
          <Form.Group className='mb-3'>
            <Form.Label>Name Of Movie</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name Of Movie'
              ref={titleRef}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Description'
              ref={openingTextRef}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Date</Form.Label>
            <Form.Control type='date' placeholder='Date' ref={releaseDateRef} />
          </Form.Group>
          <Button type='submit' variant='primary'>
            Add Movie
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddMovie;
