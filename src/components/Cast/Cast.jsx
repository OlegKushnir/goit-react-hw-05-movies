import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import axios from 'axios';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  

  async function fetchMovieCast(id) {
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get(`movie/${id}/credits`, {
        params: {
          api_key,
        },
      });

      const castResult = result.data.cast;
      if (castResult) {
        setCast(castResult);
      }
    } catch (er) {
      console.log(er.message);
      throw new Error();
    }
  }

  useEffect(() => {
    fetchMovieCast(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cast) return null;

  return (
    <>
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast.map(({ name, character, id, profile_path}) => (
          <li key={id}>
            <img src={'https://image.tmdb.org/t/p/w200'+profile_path} alt="" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
