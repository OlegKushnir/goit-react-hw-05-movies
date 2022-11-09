import { useState, useEffect } from 'react';

import axios from 'axios';
// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './Header/Header';
import { TrendingToday } from './TrendingToday/TrendingToday';
import { TrendingTodayItem } from './TrendingToday/TrendingTodayItem';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

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

  async function fetchMovie(id) {
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get(`movie/${id}`, {
        params: {
          api_key,
        },
      });
      console.log(result);
      // const movies = result.data.results;
      // if (movies.length > 0) {
      //   setMovieDetails(movies);
      // }
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
        <Route path="/" element={<AppBar/>}>
          <Route path='movies'>
           { movieDetails.id && <Route path={movieDetails.id} element={<TrendingTodayItem id={movieDetails.id}/>}/>}
        </Route>
      </Route>
      </Routes>
    
  );
};


// {id ? <Route path={id} element={<TrendingTodayItem id={id} /> } /> : ''}