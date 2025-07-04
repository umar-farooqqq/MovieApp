import React from "react";
import { Link} from "react-router"; 
import { useLocation } from "react-router";
import {House} from "lucide-react";
import { Film } from "lucide-react";
import { Tv } from "lucide-react";
import { Search } from "lucide-react";

const Bottombar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex justify-between items-center p-4 bg-black px-16 sticky bottom-0 lg:hidden xl:hidden">
      <Link to="/">
        <button>
          <House
            className={`w-6 h-6 cursor-pointer ${
              currentPath === "/" ? "text-[#00AD99]" : "text-white"
            }`}
          />
        </button>
      </Link>

      <Link to="/movie">
        <button>
          <Film
            className={`w-6 h-6 cursor-pointer ${
              currentPath === "/movie" ? "text-[#00AD99]" : "text-white"
            }`}
          />
        </button>
      </Link>

      <Link to="/tv">
        <button>
          <Tv
            className={`w-6 h-6 cursor-pointer ${
              currentPath === "/tv" ? "text-[#00AD99]" : "text-white"
            }`}
          />
        </button>
      </Link>

      <Link to="/search">
        <button>
          <Search
            className={`w-6 h-6 cursor-pointer ${
              currentPath === "/search" ? "text-[#00AD99]" : "text-white"
            }`}
          />
        </button>
      </Link>
    </div>
  );
};

export default Bottombar;

