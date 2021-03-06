import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MenuItem.css';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
  const goToUrl = () => {
    navigate(`${linkUrl}`);
  };
  return (
    <Card className='custom-card mb-3'>
      <div className='img-wrapper' onClick={goToUrl}>
        <Card.Img variant='top' src={imageUrl} />
      </div>
      <Card.Body>
        <Card.Title className='mb-5'>{title}</Card.Title>
        <Button variant='primary' onClick={goToUrl}>Shop Now</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
