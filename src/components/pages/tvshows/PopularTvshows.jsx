import React from "react";
import GridLayout from "../GridLayout";
import Card from "../../Card";
import Pagination from "../../Pagination";
import { useMovies } from "../../../hooks/useMovies";

const PopularTvshows = () => {
  const { popularTV, setPage } = useMovies();
  return (
    <>
      <GridLayout title="Popular TV Shows">
        {popularTV && <Card data={popularTV} media_type="tv" />}
      </GridLayout>
      {popularTV && <Pagination data={popularTV} setPage={setPage} />}
    </>
  );
};

export default PopularTvshows;
