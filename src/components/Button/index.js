import React from "react";

function Button({ children, ...props }) {
  
  return (
    <button className="text-white bg-purple-700 p-1 rounded w-40 hover:bg-purple-300 hover:text-black m-2" {...props}>
      {children}
    </button>
  );
}

export default Button;
