import React from "react";

const Page = ({ children, ...props }) => {
  return (
    <div className="w-auto p-5 sm:h-full bg-gray-800  grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center " {...props}>
      {children}
    </div>
  );
};

export default Page;
