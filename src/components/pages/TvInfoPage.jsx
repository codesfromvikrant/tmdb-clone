import React, { useState, useEffect } from "react";
import apiSettings from "../../API";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import AboutSection from "../AboutSection";

const TvInfopage = () => {
  const { id } = useParams();

  const { tvDetails } = useMovies(id);
  console.log(tvDetails);

  return <>{tvDetails && <AboutSection data={tvDetails} />}</>;
};

export default TvInfopage;
