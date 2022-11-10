import css from './AppBar.module.css';
import { NavLink} from 'react-router-dom';
export const AppBar = () => {
  return (
    
    <header className={css.header}>
      <NavLink to="/" className={css.home}>Home</NavLink>
      <NavLink to="movies" className={css.home}>Movies</NavLink>
    </header>
  
  );
};
