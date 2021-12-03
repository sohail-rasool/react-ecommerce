import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import MenuItem from '../components/MenuItem/MenuItem';

import { selectMenuItemsSections } from '../store/selectors/menuItemsSelector';

const HomePage = () => {
  const state = useSelector((state) => state);
  const menuItemsData = selectMenuItemsSections(state);
  return (
    <Row>
    <Col xs={12} className='mb-4 mt-2'>
     <h1 className='text-center'>All Categories</h1> 
    </Col>
      {menuItemsData.map((item) => (
        <Col lg={4} key={item.id}>
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
