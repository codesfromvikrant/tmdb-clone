import React, { useEffect } from "react";
import GridLayout from "../GridLayout";
import Card from "../../Card";
import Pagination from "../../Pagination";
import { useMovies } from "../../../hooks/useMovies";

const PopularMovies = () => {
  const { popularmovies, setPage } = useMovies();

  return (
    <>
      <GridLayout title="Popular Movies">
        {popularmovies && <Card data={popularmovies} media_type="movie" />}
      </GridLayout>
      {popularmovies && <Pagination data={popularmovies} setPage={setPage} />}
    </>
  );
};

export default PopularMovies;
