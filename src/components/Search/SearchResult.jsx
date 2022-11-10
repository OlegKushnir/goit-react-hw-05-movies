import { Link, useLocation } from 'react-router-dom';
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
