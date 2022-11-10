import { Link, useLocation } from 'react-router-dom';
export const TrendingToday = ({ trendingMovies }) => {
  const location = useLocation();
  if (!trendingMovies) return;
  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
