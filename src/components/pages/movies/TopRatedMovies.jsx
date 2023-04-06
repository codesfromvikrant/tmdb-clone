import React from "react";
import GridLayout from "../GridLayout";
import Card from "../../Card";
import Pagination from "../../Pagination";
import { useMovies } from "../../../hooks/useMovies";

const TopRatedMovies = () => {
  const { topRatedMovies, setPage } = useMovies();
  return (
    <>
      <GridLayout title="Top Rated Movies">
        {topRatedMovies && <Card data={topRatedMovies} media_type="movie" />}
      </GridLayout>
      {topRatedMovies && <Pagination data={topRatedMovies} setPage={setPage} />}
    </>
  );
};

export default TopRatedMovies;
