import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const TrendingToday = ({ trendingMovies }) => {
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
export default TrendingToday;
TrendingToday.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};