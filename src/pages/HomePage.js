import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MenuItem from '../components/MenuItem/MenuItem';

import menuItemsData from '../data/menu-items';

const HomePage = (props) => {
  return (
    <Row>
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
