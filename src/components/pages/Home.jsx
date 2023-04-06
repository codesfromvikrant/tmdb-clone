import React from "react";
import apiSettings from "../../API";
import { useMovies } from "../../hooks/useMovies";
// components
import HeroSection from "../HeroSection";
import PtvshowsSlide from "../Sliders/PtvshowsSlide";
import PmoviesSlide from "../Sliders/PmoviesSlide";
import TmoviesSlide from "../Sliders/TmoviesSlide";
import TtvshowsSlide from "../Sliders/TtvshowsSlide";

const Home = () => {
  const {
    popularmovies,
    popularTV,
    trendingmovies,
    trendingtv,
    topRatedMovies,
    topRatedTV,
  } = useMovies("pathaan");

  let bgImage;
  if (popularmovies) {
    bgImage = `https://image.tmdb.org/t/p/original${popularmovies.results[0].backdrop_path}`;
  }

  return (
    <section>
      <HeroSection bgImage={bgImage} />

      {/* Sliders here  */}
      <main className="max-w-6xl mx-auto pt-16 xl:px-0 md:px-8 px-4">
        {!popularmovies && <div>Loading...</div>}
        <PmoviesSlide popularmovies={popularmovies} />
        <PtvshowsSlide popularTV={popularTV} />
        <TmoviesSlide topRatedMovies={topRatedMovies} />
        <TtvshowsSlide topRatedTV={topRatedTV} />
      </main>
    </section>
  );
};

export default Home;
