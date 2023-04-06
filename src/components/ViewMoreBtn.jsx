import React from "react";
import { Link } from "react-router-dom";

const ViewMoreBtn = ({ link }) => {
  return (
    <Link to={link}>
      <button className="w-max bg-blue-800 text-white cursor-pointer rounded-full py-3 px-8 my-4 shadow-2xl">
        View More
      </button>
    </Link>
  );
};

export default ViewMoreBtn;
