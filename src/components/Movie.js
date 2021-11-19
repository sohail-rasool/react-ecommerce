import { Card } from 'react-bootstrap';
import MoviesList from './MoviesList';

const Movie = ({ movies }) => {
  return (
    <Card>
      <Card.Body>
        {movies.map((movie) => (
          <MoviesList
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Movie;
