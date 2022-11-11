import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from './Home/Home';

// const Home = lazy(() => import('./Home/Home'));
const TrendingToday = lazy(() =>
  import('../components/TrendingToday/TrendingToday')
);
const Movies = lazy(() => import('./Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<TrendingToday />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/:movieId" element={<MovieDetails />}>
          <Route path="/:movieId/cast" element={<Cast />} />
          <Route path="/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
