import React from "react";
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const { movieDetails } = props;
  const IMAGE_URL_PREFIX = `https://image.tmdb.org/t/p/w500`;

  return (
    < div className="MovieWrapper">
      <h3>{movieDetails.title}</h3>
      <ul className="Movies">
        <li key={movieDetails.id} className="MovieEach">
          <Link to={`/${movieDetails.id}`}>
            <img src={`${IMAGE_URL_PREFIX}${movieDetails.poster_path}`}
              alt={` Poster for ${movieDetails.original_title}`} />
          </Link>
        </li>
      </ul>

    </div>
  );
};



export { Movie };
