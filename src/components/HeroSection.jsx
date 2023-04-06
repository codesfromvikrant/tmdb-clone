import React from "react";
import apiSettings from "../API";

const HeroSection = ({ bgImage }) => {
  const style = {
    backgroundImage: `linear-gradient(45deg, #00000096, #00000049), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  };

  return (
    <div style={style} className="md:py-28 py-20 xl:px-0 md:px-8 px-4">
      <div className="max-w-6xl mx-auto w-full md:text-4xl text-3xl font-Source font-bold uppercase">
        <p>
          Welcome. <br />
          Millions of movies, TV shows
          <br /> and people to discover.
          <br /> Explore now.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
