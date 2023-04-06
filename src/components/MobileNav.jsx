import React from "react";
import logo from "../images/tmdb_logo.svg";
import { Link } from "react-router-dom";

const MobileNav = ({ handleMobileNav }) => {
  return (
    <div
      id="mobile-nav"
      className="felldown  px-4 py-6 md:hidden fixed top-0 left-0 w-full h-max bg-[#020617] z-50 shadow-2xl"
    >
      <div className="flex justify-between items-center ">
        <Link to="/">
          <img src={logo} className="w-36" alt="Logo" />
        </Link>
        <i
          onClick={handleMobileNav}
          id="mobile-nav-close"
          className="fa-solid fa-times bg-slate-900 rounded-md p-3 cursor-pointer"
        ></i>
      </div>

      <div className="">
        <div className="movies flex justify-start items-start flex-col my-2">
          <h3 className="text-gray-600 font-semibold">Movies</h3>
          <Link to="/popular-movies">Popular Movies</Link>
          <Link to="/top-rated-movies">Top Rated Movies</Link>
        </div>

        <div className="tvshows flex justify-start items-start flex-col my-2">
          <h3 className="text-gray-600 font-semibold">TV Shows</h3>
          <Link to="/popular-tvshows">Popular TV Shows</Link>
          <Link to="/top-rated-tvshows">Top Rated TV Shows</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
