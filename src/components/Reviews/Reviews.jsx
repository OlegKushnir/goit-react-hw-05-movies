import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { fetchMovieRewiews } from 'backend/backend';

 const Reviews = () => {
  const [reviews, setRewiews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieRewiews(movieId).then(movieReview=>setRewiews(movieReview));
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
export default Reviews;