const API_KEY = '8affd7e9aa1bbcaf696efe27fede3ce1';

const language = 'en-US';
const BASE_URL = `https://api.themoviedb.org/3/`;

const apiSettings = {
  // For Images
  IMAGE_BASE_URL: `https://image.tmdb.org/t/p/original/`,

  // For Popular results endpoints
  POPULAR_MOVIES: `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${language}`,
  POPULAR_TV: `${BASE_URL}tv/popular?api_key=${API_KEY}&language=${language}`,
  TRENDING_MOVIES: `${BASE_URL}trending/movie/week?api_key=${API_KEY}`,
  TRENDING_TV: `${BASE_URL}trending/tv/week?api_key=${API_KEY}`,
  TOP_RATED_MOVIES: `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=${language}`,
  TOP_RATED_TV: `${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=${language}`,

  // For Search Endpoints
  SEARCH_MULTI: `${BASE_URL}search/multi?api_key=${API_KEY}&language=${language}`,

  fetchPopularMovies: async function (page) {
    const endpoint = `${this.POPULAR_MOVIES}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPopularTV: async function (page) {
    const endpoint = `${this.POPULAR_TV}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrendingMovies: async function () {
    const endpoint = `${this.TRENDING_MOVIES}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrendingTV: async function () {
    const endpoint = `${this.POPULAR_TV}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTopRatedMovies: async function (page) {
    const endpoint = `${this.TOP_RATED_MOVIES}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTopRatedTV: async function (page) {
    const endpoint = `${this.TOP_RATED_TV}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchSearch: async function (searchTerm, page) {
    const endpoint = `${this.SEARCH_MULTI}&query=${searchTerm}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovieDetails: async function (movieId) {
    const endpoint = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${language}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTVDetails: async function (tvId) {
    const endpoint = `${BASE_URL}tv/${tvId}?api_key=${API_KEY}&language=${language}`;
    return await (await fetch(endpoint)).json();
  },
}

export default apiSettings;