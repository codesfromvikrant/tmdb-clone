import React, { useState, useEffect } from "react";
import apiSettings from "../../API";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import AboutSection from "../AboutSection";

const MovieInfopage = () => {
  const { id } = useParams();

  const { movieDetails } = useMovies(id);
  console.log(movieDetails);

  return <>{movieDetails && <AboutSection data={movieDetails} />}</>;
};

export default MovieInfopage;
