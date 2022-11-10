import { useEffect } from 'react';
import { useState } from 'react';
import css from './MovieDetails.module.css';
import { Link, Outlet, useParams, useLocation, NavLink } from 'react-router-dom';
import axios from 'axios';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  async function fetchMovieById(id) {
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get(`movie/${id}`, {
        params: {
          api_key,
        },
      });
      if (result.data) {
        setMovieDetails(result.data);
      }
    } catch (er) {
      console.log(er.message);
      throw new Error();
    }
  }

  useEffect(() => {
    fetchMovieById(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movieDetails) return null;

  const { original_title, overview, poster_path, vote_average, genres } =
    movieDetails;
  return (
    <>
      <p>
        <NavLink to={location.state?.from ?? '/movies'} className={css.goBack}>Go back</NavLink>
      </p>
      <div className={css.wrapper}>
        <div>
          <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt="" />
        </div>
        <div>
          <h1>{original_title}</h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={css.aditional}>
        <h3>Aditional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
