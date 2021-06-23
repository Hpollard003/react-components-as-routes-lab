import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, ind) => (
          <div key={ind}>
            <h2>Starring : {actor.name}</h2>
            <h3>Featured Films</h3>
            <ul>
              {
                actor.movies.map((movie, ind) => (
                  <li key={ind}>{movie}</li>
                ))
              }
            </ul>
          </div>
      ))


      }
    </div>
  );
};

export default Actors;
