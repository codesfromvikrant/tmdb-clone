import React from "react";
import Image from "../../images/404.png";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <img src={Image} alt="404-page-not-found" className="w-2/3 mx-auto" />
      <div className="w-max mx-auto my-12">
        <p className="text-xl">
          This Page is not available! Back to the Home Page.
        </p>
        <Link to="/">
          <button className="bg-slate-900 py-3 px-6 rounded-sm">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
