import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MenuItem from '../components/MenuItem/MenuItem';

import menuItemsData from '../data/menu-items';

const HomePage = () => {
  return (
    <Row md={3} className='g-4'>
      {menuItemsData.map((item) => (
        <Col key={item.id}>
          <MenuItem
            title={item.title}
            imageUrl={item.imageUrl}
            linkUrl={item.linkUrl}
          />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
