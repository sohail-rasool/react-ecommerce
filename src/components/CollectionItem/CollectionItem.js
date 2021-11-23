import React from 'react';
import { Col, Card, Badge, Button } from 'react-bootstrap';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <Col lg={3} className='mb-3'>
      <Card className='custom-card'>
        <div className='img-wrapper'>
          <Card.Img variant='top' src={imageUrl} />
        </div>
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <Card.Title>{name}</Card.Title>
            <Badge bg='info'>{price}</Badge>
          </div>
          <Button variant='primary'>Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CollectionItem;
