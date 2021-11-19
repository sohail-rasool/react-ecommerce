import { ListGroup } from 'react-bootstrap';

const MoviesList = ({ title, releaseDate, openingText }) => {
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>{title}</ListGroup.Item>
      <ListGroup.Item>{releaseDate}</ListGroup.Item>
      <ListGroup.Item>{openingText}</ListGroup.Item>
    </ListGroup>
  );
};

export default MoviesList;
