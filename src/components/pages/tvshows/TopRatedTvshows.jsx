import React from "react";
import GridLayout from "../GridLayout";
import Card from "../../Card";
import Pagination from "../../Pagination";
import { useMovies } from "../../../hooks/useMovies";

const TopRatedTvshows = () => {
  const { trendingtv, setPage } = useMovies();
  return (
    <>
      <GridLayout title="Top Rated TV Shows">
        {trendingtv && <Card data={trendingtv} media_type="tv" />}
      </GridLayout>
      {trendingtv && <Pagination data={trendingtv} setPage={setPage} />}
    </>
  );
};

export default TopRatedTvshows;
