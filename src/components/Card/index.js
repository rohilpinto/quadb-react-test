import React from "react";

const Card = ({ children, ...props }) => {
  return (
    <div className=" w-80   bg-gray-500 text-white text-center p-3  	rounded" {...props}>
      {children}
    </div>
  );
};

export default Card;
