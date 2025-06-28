import React from "react";
import { Star } from "lucide-react";
import Card from "./Card";

const Feed = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://movies-proxy.vercel.app/ipx/f_webp&s_2440x1318/tmdb/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg')`,
      }}
      className="relative bg-cover bg-center h-[300px] w-full pl-8 pt-24 lg:h-[400px]"
    >
    
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.2) 85%)",
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="font-semibold text-3xl text-white ">A Working Man</h1>
        <div className="flex mt-4 mb-2 text-[#00AD99]">
          <Star className="fill-[#00AD99]" />
          <Star className="fill-[#00AD99]" />
          <Star className="fill-[#00AD99]" />
          <Star />
          <Star />
          <span className="ml-2 text-gray-300">· 2025 · 1h 56min</span>
        </div>
        <p className="text-sm text-gray-300 line-clamp-3 lg:w-[600px] lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, provident quae. Ad nulla dolorem modi sit, doloribus omnis eligendi, aperiam vel vero velit et commodi quam at blanditiis non odio quis. Porro, qui, cum odio, eaque asperiores voluptate labore consequuntur pariatur inventore laborum beatae exercitationem sequi facere rerum a unde aliquam excepturi eum nesciunt necessitatibus explicabo! Dolorem adipisci consequuntur rem quibusdam, cupiditate laudantium vero, quo, ex ad eos voluptates saepe!
        </p>
      </div>

      

    </div>
  );
};

export default Feed;
