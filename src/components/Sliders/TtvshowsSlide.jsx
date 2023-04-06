import React from "react";
import Card from "../Card";
import ViewMoreBtn from "../ViewMoreBtn";
import SlideLayout from "./SlideLayout";

const TtvshowsSlide = ({ topRatedTV }) => {
  return (
    <div className="mt-10 relative">
      <h3 className="text-2xl font-Source font-semibold ">
        Top Rated TV Shows
      </h3>
      <SlideLayout>
        {topRatedTV && <Card data={topRatedTV} media_type="tv" />}
      </SlideLayout>
      <ViewMoreBtn link="/top-rated-tvshows?page=2" />
    </div>
  );
};

export default TtvshowsSlide;
