//MoviesOverview.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MoviesOverview = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState({});

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: {
        api_key: '9b4cc661bf8622c89299a0070c561412'
      },
    }).then((res) => {
      const movieResults = res.data;

      setMovies(movieResults);
    })
  }, [movieId]);


  const { original_title, tagline, overview, poster_path } = movie;
  return (
    <div className="poster">
      <Link to={"/"}><span className='back'>Back</span></Link>
      <div className="description">
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className="poster-image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`Movie poster for ${original_title}`}
        />
      </div>
    </div>
  )
}
export default MoviesOverview;

