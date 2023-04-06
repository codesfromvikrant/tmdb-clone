import React from "react";

const SlideLayout = ({ children }) => {
  return (
    <div className="flex justify-start items-start h-full gap-3 overflow-x-scroll overflow-y-hidden pt-3 px-3 relative">
      {children}
    </div>
  );
};

export default SlideLayout;
