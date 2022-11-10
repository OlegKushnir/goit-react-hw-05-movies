import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { SearchResult } from './SearchResult';


export const SearchMovies = () => {
  const [searchedMovies,setSearchedMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  function getValue(value) {
    setSearchParams(value !== '' ? { query: value } : {});
  }

  async function fetchSearchedMovie(query) {
    const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    try {
      const result = await axios.get(`search/movie`, {
        params: {
          api_key,
          query,
        },
      });
      const movies = result.data.results;
      console.log('movies',movies);
      if (movies.length > 0) {
        console.log('Adding movies');
        setSearchedMovies(movies);
      }
    }
    catch (er) {
      console.log(er.message);
      throw new Error();
    }
  }
  useEffect(() => {
    if (search) {
      fetchSearchedMovie(search);
      console.log('search',search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

 

  return (
    <>
      <SearchBox getValue={getValue} />
      {searchedMovies.length > 0 && <SearchResult searchedMovies={searchedMovies}  /> }
    </>
  );
};
