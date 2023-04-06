import React from "react";
import Card from "../Card";
import ViewMoreBtn from "../ViewMoreBtn";
import SlideLayout from "./SlideLayout";

const PtvshowsSlide = ({ popularTV }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-Source font-semibold ">Popular TV Shows</h3>
      <SlideLayout>
        {popularTV && <Card data={popularTV} media_type="tv" />}
      </SlideLayout>
      <ViewMoreBtn link="/popular-tvshows?page=2" />
    </div>
  );
};

export default PtvshowsSlide;
