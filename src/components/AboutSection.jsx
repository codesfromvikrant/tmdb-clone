import React from "react";
import apiSettings from "../API";
import starIcon from "../images/starIcon.png";
import NoImage from "../images/no_image.jpg";

const AboutSection = ({ data }) => {
  let backgroundImage = apiSettings.IMAGE_BASE_URL + data.backdrop_path;
  let posterImage = apiSettings.IMAGE_BASE_URL + data.poster_path;

  const style = {
    background: `url(${backgroundImage ? backgroundImage : NoImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgColor = function (ratings) {
    if (Number(ratings) <= 3) return "#dc2626";
    if (Number(ratings) <= 7) return "#fbbf24";
    if (Number(ratings) <= 10) return "#16a34a";
  };
  const ratingStyle = {
    backgroundColor: bgColor(data.vote_average),
  };

  // Convert a number to money formatting
  const convertMoney = (money) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  };

  return (
    <section
      style={style}
      className="py-16 px-6 w-full flex justify-center items-center"
    >
      <div className="flex justify-start items-start sm:flex-row flex-col bg-[#000000ae] xl:max-w-6xl max-w-full  rounded-md relative z-1">
        <div className="sm:w-1/3 w-1/2">
          <img
            src={posterImage ? posterImage : NoImage}
            className="w-full rounded-md"
            alt=""
          />
        </div>

        <div className="h text-white sm:w-2/3 xl:p-12 p-6">
          <div
            style={ratingStyle}
            className="w-max px-4 py-1 rounded flex justify-start items-center gap-1"
          >
            <p className="text-sm">{data.vote_average}</p>
            <img src={starIcon} className="w-4" />
          </div>
          <h1 className="xl:text-4xl sm:text-3xl text-2xl font-sans uppercase sm:font-bold font-extrabold tracking-wide">
            {data.original_title}
          </h1>
          <h4 className="text-sm text-gray-300">{data.tagline}</h4>

          <div className="pt-5 flex flex-wrap gap-2">
            {data.genres.map((genres) => {
              return (
                <p
                  className="bg-slate-600 text-sm shadow-xl px-4 py-1 rounded"
                  key={genres.id}
                >
                  {genres.name}
                </p>
              );
            })}
          </div>
          <p className="py-1 font-light text-sm">{data.overview}</p>

          <h3 className="text-white text-xl font-semibold pt-5 pb-1">
            Movie Info
          </h3>
          <div className="text-sm font-semibold">
            <div className="text-white py-1">
              Release Date :{" "}
              <span className=" text-gray-300 pl-2">{data.release_date}</span>
            </div>
            <div className="py-1 border-t-2 border-b-2 border-[#ffffff2c]">
              Budget :{" "}
              <span className="text-gray-300 pl-2">
                {convertMoney(data.budget)}
              </span>
            </div>
            <div className="py-1">
              Revenue :{" "}
              <span className="text-gray-300 pl-2">
                {convertMoney(data.revenue)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
