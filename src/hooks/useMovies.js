import React, { useEffect, useState } from "react";
import apiSettings from "../API";

export const useMovies = (id = '') => {
  const [page, setPage] = useState(1);
  const [popularmovies, setPopularMovies] = useState();
  const [trendingmovies, setTrendingMovies] = useState();
  const [trendingtv, setTrendingTV] = useState();
  const [popularTV, setPopularTV] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [topRatedTV, setTopRatedTV] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [movieDetails, setMovieDetails] = useState();
  const [tvDetails, setTVDetails] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setPopularMovies(await apiSettings.fetchPopularMovies(page));
        setPopularTV(await apiSettings.fetchPopularTV(page));
        setTrendingMovies(await apiSettings.fetchTrendingMovies());
        setTrendingTV(await apiSettings.fetchTrendingTV());
        setTopRatedMovies(await apiSettings.fetchTopRatedMovies(page));
        setTopRatedTV(await apiSettings.fetchTopRatedTV(page));
        setSearchResult(await apiSettings.fetchSearch(searchTerm, page));
        if (id) {
          setMovieDetails(await apiSettings.fetchMovieDetails(id));
          setTVDetails(await apiSettings.fetchTVDetails(id));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [page, searchTerm, id]);


  return {
    popularmovies,
    popularTV,
    trendingmovies,
    trendingtv,
    topRatedMovies,
    topRatedTV,
    page,
    setPage,
    searchResult,
    setSearchTerm,
    movieDetails,
    tvDetails,
  };
}
