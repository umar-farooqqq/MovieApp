import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between items-center p-6 py-32 bg-black sticky left-0  h-screen">
      <img src="./house.svg" alt="" className="w-6 h-6 cursor-pointer" />
      <img src="./film.svg" alt="" className="w-6 h-6 cursor-pointer" />
      <img src="./tv.svg" alt="" className="w-6 h-6 cursor-pointer" />
      <img src="./search.svg" alt="" className="w-6 h-6 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
