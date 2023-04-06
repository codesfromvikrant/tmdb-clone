import React from "react";
import Card from "../Card";
import ViewMoreBtn from "../ViewMoreBtn";
import SlideLayout from "./SlideLayout";

const PmoviesSlide = ({ popularmovies }) => {
  return (
    <div className="mt-10 relative">
      <h3 className="text-2xl font-Source font-semibold ">Popular Movies</h3>
      <SlideLayout>
        {popularmovies && <Card data={popularmovies} media_type="movie" />}
      </SlideLayout>
      <ViewMoreBtn link="/popular-movies?page=2" />
    </div>
  );
};

export default PmoviesSlide;
