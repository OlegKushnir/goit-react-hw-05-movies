import css from './Home.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const Home = () => {
  return (
    <>
      <AppBar />
      <section className={css.content}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};
export default Home;