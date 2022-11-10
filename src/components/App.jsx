import { useState, useEffect, lazy } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const TrendingToday = lazy(()=>import('../components/TrendingToday/TrendingToday'))
const SearchMovies = lazy(()=>import('../components/Search/SearchMovies'))

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  async function fetchTrending() {
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get('trending/movie/day', {
        params: {
          api_key,
        },
      });
      const movies = result.data.results;
      if (movies.length > 0) {
        setTrendingMovies(movies);
      }
    } catch (er) {
      setError(er.message);
      console.log(error);
      throw new Error();
    }
  }

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={<TrendingToday trendingMovies={trendingMovies} />}
        />
        <Route path="/movies" element={<SearchMovies/>}>
        </Route>
        <Route path="/:movieId" element={<MovieDetails />}>
          <Route path="/:movieId/cast" element={<Cast />} />
          <Route path="/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

