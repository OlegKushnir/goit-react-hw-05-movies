import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { fetchMovieCast } from 'backend/backend';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(movieCast => setCast(movieCast));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cast) return null;

  return (
    <>
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast.length > 0 ? (
          cast.map(({ name, character, id, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path &&
                  'https://image.tmdb.org/t/p/w200' + profile_path
                }
                alt=""
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>We don't have any cast for this movie.</p>
        )}
      </ul>
    </>
  );
};
export default Cast;
