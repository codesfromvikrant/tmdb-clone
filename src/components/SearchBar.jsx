import React, { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { searchResult, setSearchTerm } = useMovies();
  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  let results;
  if (searchResult) {
    results = searchResult.results.map((el, i) => {
      if (i <= 5 && el.title) {
        console.log(el);
        return (
          <div
            onClick={() => {
              navigate(`/movie/${el.id}`);
              setValue("");
            }}
            key={i}
            className="py-3 px-6 flex justify-between items-center bg-slate-800 m-2 rounded-md cursor-pointer shadow-md z-50"
          >
            <p> {el.title + " (" + el.release_date.slice(0, 4) + ")"}</p>
            <p className="text-gray-400 capitalize">{el.media_type}</p>
          </div>
        );
      }
    });
  }
  /**/

  return (
    <div className="max-w-6xl mx-auto mt-3 outline-none relative">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="w-full p-3 bg-slate-900 rounded-md outline-2 outline-blue-800 sm:text-base text-sm"
        placeholder="Search for Movies & TV Shows"
      />
      <div className="w-full bg-slate-900 rounded-md absolute mt-3 z-50">
        {results}
      </div>
    </div>
  );
};

export default SearchBar;
