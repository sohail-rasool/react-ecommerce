import React from 'react';
import { Row } from 'react-bootstrap';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h3 className='my-5 text-center'>{title}</h3>
      <Row>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </Row>
    </div>
  );
};

export default CollectionPreview;
