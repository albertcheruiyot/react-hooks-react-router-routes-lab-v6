
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const params = useParams(); // Get the id parameter from the URL
  const id = params.id;
  const [movie, setMovie] = useState(null); // State to store the movie data

  useEffect(function fetchMovieData() {
    const fetchMovie = async function () {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]); // Re-fetch movie data when id parameter changes

  if (!movie) {
    return <div>Loading...</div>; // Display loading message while fetching movie data
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <div>
          <h1>{movie.title}</h1>
          <p>Time: {movie.time}</p>
          <p>Genres: {movie.genres.map(function (genre) {
            return <span key={genre}>{genre}</span>;
          })}</p>
        </div>
      </main>
    </>
  );
};

export default Movie;
