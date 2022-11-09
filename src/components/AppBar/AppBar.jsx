import css from './Header.module.css';
import { Link } from 'react-router-dom';
export const AppBar = () => {
  return (
    <header className={css.header}>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
    </header>
  );
};
