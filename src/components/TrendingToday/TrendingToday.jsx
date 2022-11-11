import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { fetchTrending } from 'backend/backend';

const TrendingToday = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(movies=>setTrendingMovies(movies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
export default TrendingToday;