import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MenuItem.css';

const MenuItem = ({ title, imageUrl }) => {
  return (
    <Card className='custom-card'>
      <div className='img-wrapper'>
        <Card.Img variant='top' src={imageUrl} />
      </div>
      <Card.Body>
        <Card.Title className='mb-5'>{title}</Card.Title>
        <Button variant='primary'>Shop Now</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
