import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((title, ind)=>(
          <div key={ind}>
            <h2>{title.title}</h2>
            <p>Length in mins : {title.time}</p>
            <h3>Genres</h3>
            <ul>
              {
                title.genres.map((genre, ind) => (
                  <li key={ind}>
                    {genre}
                  </li>
                ))
              }
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
