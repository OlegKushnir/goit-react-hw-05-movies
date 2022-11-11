import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const api_key = 'e3c158ab405aa7844dcf81b819b98dcd';


   export async function fetchTrending() {
        try {
          const result = await axios.get('trending/movie/day', {
            params: {
              api_key,
            },
          });
          const movies = result.data.results;
          if (movies.length > 0) {
            return movies;
          }
        } catch (er) {
          console.log(er.message);
          throw new Error();
        }
      }
      export async function fetchMovieById(id) {
        try {
          const result = await axios.get(`movie/${id}`, {
            params: {
              api_key,
            },
          });
          if (result.data) {
            return result.data;
          }
        } catch (er) {
          console.log(er.message);
          throw new Error();
        }
      }
      export async function fetchMovieCast(id) {
        try {
          const result = await axios.get(`movie/${id}/credits`, {
            params: {
              api_key,
            },
          });
    
          const castResult = result.data.cast;
          if (castResult) {
           return castResult
          }
        } catch (er) {
          console.log(er.message);
          throw new Error();
        }
      }

      export async function fetchMovieRewiews(id) {
        try {
          const result = await axios.get(`movie/${id}/reviews`, {
            params: {
              api_key,
            },
          });
          const reviewsResult = result.data.results;
          if (reviewsResult) {
            return reviewsResult;
          }
        } catch (er) {
          console.log(er.message);
          throw new Error();
        }
      }

      export async function fetchSearchedMovie(query) {
        try {
          const result = await axios.get(`search/movie`, {
            params: {
              api_key,
              query,
            },
          });
          const movies = result.data.results;
          if (movies.length > 0) {
           return movies;
          }
        }
        catch (er) {
          console.log(er.message);
          throw new Error();
        }
      }