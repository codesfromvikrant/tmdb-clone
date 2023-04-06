import React from "react";
//import apiSettings from "./API";
// routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import PopularMovies from "./components/pages/movies/PopularMovies";
import TopRatedMovies from "./components/pages/movies/TopRatedMovies";
import PopularTvshows from "./components/pages/tvshows/PopularTvshows";
import TopRatedTvshows from "./components/pages/tvshows/TopRatedTvshows";
import NoPage from "./components/pages/NoPage";
import MovieInfopage from "./components/pages/MovieInfopage";
import TvInfopage from "./components/pages/TvInfoPage";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="popular-movies" element={<PopularMovies />} />
            <Route path="popular-tvshows" element={<PopularTvshows />} />
            <Route path="top-rated-movies" element={<TopRatedMovies />} />
            <Route path="top-rated-tvshows" element={<TopRatedTvshows />} />
            <Route path="movie/:id" element={<MovieInfopage />} />
            <Route path="tv/:id" element={<TvInfopage />} />
          </Route>
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;