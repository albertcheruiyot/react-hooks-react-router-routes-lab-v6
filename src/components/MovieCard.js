import {Link} from 'react-router-dom';

function MovieCard({title, movieId}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <p>
          <Link to={`/movie/${movieId}`}>View Info</Link>
        </p>
    </article>
  );
};

export default MovieCard;