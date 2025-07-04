import React from "react";
import Sidebar from "../components/Sidebar"; 
import Searchcontainer from "../components/Searchcontainer";

const Search = () => {
  return (
    <div>
      <div className="lg:w-full h-[680px] flex flex-row bg-gray-600 ">
        <Sidebar />

        <Searchcontainer/>

      </div>
    </div>
  );
};

export default Search;
