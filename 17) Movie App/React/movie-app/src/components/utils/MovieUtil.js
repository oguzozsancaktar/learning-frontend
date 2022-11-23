export const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5782988c01d5752f8fb39440f1f8d0ce&page=1";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=5782988c01d5752f8fb39440f1f8d0ce&page=1&query="';

export const getAllMovies = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data.results;
};

export const getMoviesByQuery = async (searchTerm) => {
  const res = await fetch(SEARCH_API + searchTerm);
  const data = await res.json();

  return data.results;
};
