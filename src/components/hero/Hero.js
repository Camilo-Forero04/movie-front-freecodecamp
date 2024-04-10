import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
  // Check if movies is undefined or null, and return null to prevent rendering
  if (!movies) {
    return null;
  }

  return (
    <div>
      <Carousel>
        {movies.map((movie) => (
          <Paper key={movie.id}> {/* Ensure each item in the list has a unique key */}
            <div className='movie-card-container'>
              <div className="movie-card">
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt=""/>
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;




