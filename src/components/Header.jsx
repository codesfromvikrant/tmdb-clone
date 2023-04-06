import React, { useState } from "react";
// Images
import logo from "../images/tmdb_logo.svg";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <header className="bg-slate-950 text-white py-4 md:px-8 px-4 shadow-xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} className="sm:w-44 w-36" alt="Logo" />
          </Link>
          <nav className="md:block hidden">
            <ul className="flex justify-start items-center gap-4">
              <li>
                <Link to="/popular-movies">Popular Movies</Link>
              </li>
              <li>
                <Link to="/top-rated-movies">Top Rated Movies</Link>
              </li>
              <li>
                <Link to="/popular-tvshows">Popular TV Shows</Link>
              </li>
              <li>
                <Link to="/top-rated-tvshows">Top Rated TV Shows</Link>
              </li>
            </ul>
          </nav>
          <i
            onClick={handleMobileNav}
            className="fa-solid fa-bars bg-slate-900 rounded-md p-3 cursor-pointer md:hidden"
          ></i>
        </div>
        <SearchBar />
      </header>
      {mobileNav && <MobileNav handleMobileNav={handleMobileNav} />}
    </>
  );
}

export default Header;
