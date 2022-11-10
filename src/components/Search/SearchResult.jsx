import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export const SearchResult = ({ searchedMovies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {searchedMovies.map(({ id, title }) => (
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

SearchResult.propTypes = {
  searchedMovies: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};