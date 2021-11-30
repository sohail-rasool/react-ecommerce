import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectShopDataCollection } from '../../store/selectors/shopDataSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

const Collection = () => {
  const state = useSelector((state) => state);
  const { collectionId } = useParams();
  const shopDataCollectionItem = selectShopDataCollection(collectionId)(state);
  const { title, items } = shopDataCollectionItem;
  return (
    <>
      <h1 className='mb-5 text-center'>{title}</h1>
      <Row>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Row>
    </>
  );
};

export default Collection;
