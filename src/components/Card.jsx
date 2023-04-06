import React from "react";
import apiSettings from "../API";
import Rating from "./Rating";
import SlideLayout from "./Sliders/SlideLayout";
import { useNavigate } from "react-router-dom";

const Card = ({ data, media_type }) => {
  const navigate = useNavigate();

  const cards = data.results.map((el) => {
    return (
      <div
        onClick={() => {
          navigate(`/${media_type}/${el.id}`);
        }}
        key={el.id}
        className="w-min max-h-full p-2 rounded relative cursor-pointer"
      >
        <img
          loading="lazy"
          src={`${apiSettings.IMAGE_BASE_URL + el.poster_path}`}
          className="md:max-w-[9rem] max-w-[12rem] h-auto rounded-md"
        />
        <p className="font-thin w-full text-sm mt-2">
          {el.original_name ? el.original_name : el.original_title}
        </p>
        <Rating rating={el.vote_average} />
      </div>
    );
  });

  return <>{cards}</>;
};

export default Card;
