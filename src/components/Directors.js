import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map((directorr, ind) => (
          <div key={ind}>
            <h2>{directorr.name}</h2>
            <h3>Titles</h3>
              <ul>
                {
                  directorr.movies.map((movie, ind) => (
                    <li key={ind}>{movie}</li>
                  ))
                }
              </ul>
          </div>
        ))
      }
    </div>
  );
}

export default Directors
