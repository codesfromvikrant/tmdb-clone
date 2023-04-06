import React from "react";
import Card from "../Card";
import ViewMoreBtn from "../ViewMoreBtn";
import SlideLayout from "./SlideLayout";

const TmoviesSlide = ({ topRatedMovies }) => {
  return (
    <div className="mt-10 relative">
      <h3 className="text-2xl font-Source font-semibold ">Top Rated Movies</h3>
      <SlideLayout>
        {topRatedMovies && <Card data={topRatedMovies} media_type="movie" />}
      </SlideLayout>
      <ViewMoreBtn link="/top-rated-movies?page=2" />
    </div>
  );
};

export default TmoviesSlide;
