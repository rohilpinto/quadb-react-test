import React from "react";

const Card = ({ children, ...props }) => {
  return (
    <div className="w-80   bg-gray-500 text-white text-center p-3 rounded transition-all duration-150  hover:bg-gray-700" {...props}>
      {children}
    </div>
  );
};

export default Card;
