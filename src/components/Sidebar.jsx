import React from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import {House} from "lucide-react";
import { Film } from "lucide-react";
import { Tv } from "lucide-react";
import { Search } from "lucide-react";

const Sidebar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="hidden lg:flex flex-col justify-between items-center p-6 py-32 bg-black sticky top-0 h-screen">
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

export default Sidebar;
