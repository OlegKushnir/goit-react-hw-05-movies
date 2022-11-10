import css from './Home.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
export const Home = () => {
  return (
    <>
      <AppBar />
      <section className={css.content}>
        <Outlet />
      </section>
    </>
  );
};
