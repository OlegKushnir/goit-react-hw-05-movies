import { useState, useEffect } from 'react';

import axios from 'axios';
// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './Header/Header';
import { TrendingToday } from './TrendingToday/TrendingToday';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  // const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  async function fetchTrending() {
    // setStatus('pending');
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get('trending/movie/day', {
        params: {
          api_key,
        },
      });
      console.log(result.data.results);
      const movies = result.data.results;
      if (movies.length > 0) {
        setTrendingMovies(movies);
        // console.log('resolved');
        // setStatus('resolved');
      } else {
        // setStatus('rejected');
      }
    } catch (er) {
      // setStatus('rejected');
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
        <Route path="/" element={<TrendingToday trendingMovies={trendingMovies} />}/>
      </Routes>
   
  );
};
