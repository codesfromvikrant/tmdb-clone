import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ data, setPage }) => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page") || 1;

  const totalPages = data.total_pages;
  useEffect(() => {
    setPage(page);
  }, [page]);

  let arr = []; // Create an empty array
  const btnCount = 4;

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(startPage + btnCount - 1);

  for (let i = startPage; i <= endPage; i++) {
    arr.push(i);
  }

  const pageBtn = arr.map((page) => {
    const query = "?page=" + page;
    // Map over the array
    return (
      <Link to={query}>
        <button
          onClick={() => {
            setPage(page);
          }}
          key={page}
          className="page-btn sm:text-base text-xs bg-slate-800 p-3 rounded-sm"
        >
          {page}
        </button>
      </Link>
    );
  });

  function nextpage() {
    arr = [];
    if (startPage + btnCount > totalPages) return;
    setStartPage((prev) => prev + btnCount);
    setEndPage((prev) => prev + btnCount);
  }

  function prevpage() {
    arr = [];
    if (startPage - btnCount < 1) return;
    setStartPage((prev) => prev - btnCount);
    setEndPage((prev) => prev - btnCount);
  }

  return (
    <div className="pagination flex justify-center items-center flex-wrap gap-2">
      <button
        onClick={prevpage}
        className="bg-slate-900 sm:text-base text-xs py-3 px-6 rounded-sm"
      >
        Prev
      </button>
      {pageBtn}
      <button
        onClick={nextpage}
        className="bg-slate-900 sm:text-base text-xs py-3 px-6 rounded-sm"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
