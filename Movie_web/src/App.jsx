import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Monkey_Man from './img/Monkey_Man Poster.jpg'
import Jumanji_Next_Level from './img/Jumanji_Next_Level.jpg'
import Adventure_Movie_Poster_Template from './img/Adventure_Movie_Poster_Template.jpg'
const movies = [
  {
    id: 1,
    title: 'Monkey Man',
    description: `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world...`,
    duration: '117 min',
    year: 2023,
    poster: Monkey_Man,
  },
  {
    id: 2,
    title: 'Jumanji Next Level',
    description: `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world...`,
    duration: '157 min',
    year: 2020,
    poster: Jumanji_Next_Level,
  },
  {
    id: 3,
    title: 'RoAdventure Movie Poster Templateom',
    description: `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world...`,
    duration: '207 min',
    year: 2010,
    poster: Adventure_Movie_Poster_Template,
  },
  
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClickMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="menu-icon">&#9776;</div>
        <div className="logo">MOVIE UI</div>
        <div className="search-icon">&#128269;</div>
      </header>

      <main>
        {selectedMovie ? (
          <MoviePopup movie={selectedMovie} onClose={handleClosePopup} />
        ) : (
          <>
            <h2>Most Popular Movies</h2>
            <MovieList movies={movies} onClickMovie={handleClickMovie} />
          </>
        )}
      </main>
    </div>
  );
}

const MovieList = ({ movies, onClickMovie }) => (
  <div className="movie-list">
    {movies.slice(0, 4).map((movie, index) => (
      <div className="movie" key={index} onClick={() => onClickMovie(movie)}>
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.duration} {movie.year}</p>
        </div>
      </div>
    ))}
    
  </div>
);

const MoviePopup = ({ movie, onClose }) => (
  <div className="movie-popup">
    <div className="popup-content">
      <img src={movie.poster} alt={`${movie.title} poster`} className="popup-poster" />
      <div className="popup-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>{movie.duration} {movie.year}</p>
        <button className="play-button">Play Movie</button>
      </div>
      <button className="close-popup" onClick={onClose}>✖</button>
    </div>
  </div>
);

export default App;
