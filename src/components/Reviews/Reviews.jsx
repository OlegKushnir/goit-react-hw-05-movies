import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import axios from 'axios';

export const Reviews = () => {
  const [reviews, setRewiews] = useState(null);
  const { movieId } = useParams();

  async function fetchMovieRewiews(id) {
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get(`movie/${id}/reviews`, {
        params: {
          api_key,
        },
      });
      const reviewsResult = result.data.results;
      if (reviewsResult) {
        setRewiews(reviewsResult);
      }
    } catch (er) {
      console.log(er.message);
      throw new Error();
    }
  }

  useEffect(() => {
    fetchMovieRewiews(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!reviews) return null;

  return (
    <>
      <ul className={css.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};
