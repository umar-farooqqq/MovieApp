import React from "react";

const Searchcontainer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 bg-gray-800 p-4 w-full">
        <button>
          <img src="/search.svg" alt="search" className="w-5 h-5 ml-4" />
        </button>
        <input
          type="text"
          placeholder="Type to search..."
          className="bg-transparent outline-none w-full text-2xl ml-2 text-white"
        />
      </div>
      <p className="w-full text-4xl text-center p-8 text-gray-300">
        Type something to search...
      </p>
    </div>
  );
};

export default Searchcontainer;
