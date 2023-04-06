import React from "react";

const Rating = ({ rating }) => {
  const bgColor = function (ratings) {
    if (Number(ratings) <= 3) return "#dc2626";
    if (Number(ratings) <= 7) return "#fbbf24";
    if (Number(ratings) <= 10) return "#16a34a";
  };
  const ratingStyle = {
    backgroundColor: bgColor(rating),
  };
  return (
    <div
      style={ratingStyle}
      className="flex justify-center items-center rounded-full shadow-2xl absolute -top-2 -left-2 w-10 h-10"
    >
      <p className="font-bold font-Source text-slate-900">
        {rating.toFixed(1)}
      </p>
    </div>
  );
};

export default Rating;
