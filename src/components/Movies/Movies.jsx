import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../Search/SearchBox';
import { SearchResult } from '../Search/SearchResult';
import { fetchSearchedMovie } from 'backend/backend';


 const Movies = () => {
  const [searchedMovies,setSearchedMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  function getValue(value) {
    setSearchParams(value !== '' ? { query: value } : {});
  }

  useEffect(() => {
    if (search) {
      fetchSearchedMovie(search).then(movies=>setSearchedMovies(movies));
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

export default Movies;