import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'; 
import Movie from './Movie'
import MovieCard from './MovieCard'
import SavedList from './SavedList'
const MovieList = props => {


  const [movieList, setMovieList] = useState([]);
  // console.log(props)
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie}  />
        </Link>
        
      ))}
  
    </div>
  );
}

function MovieDetails({movie}) {
  const {title, director, metascore} = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
     <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>


    </div>
  );
}

export default MovieList;
