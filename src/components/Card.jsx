import React from "react";
import { Star } from "lucide-react";

const Card = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-8">
        <h1 className="text-xl font-semibold">Popular Movies</h1>
        <span className="hover:underline cursor-pointer">Explore More</span>
      </div>
      <img
        src="https://movies-proxy.vercel.app/ipx/f_webp&s_800x1200/tmdb/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg"
        alt=""
        className="h-[250px] object-contain cursor-pointer ml-8"
      />
      <p className="ml-8">A Working Man</p>
      <div className="flex items-center mb-2 text-[#00AD99] ml-8">
        <Star className="fill-[#00AD99] w-4 h-4" />
        <Star className="fill-[#00AD99] w-4 h-4" />
        <Star className="fill-[#00AD99] w-4 h-4" />
        <Star className="w-4 h-4" />
        <Star className="w-4 h-4" />
        <span className="ml-2 text-gray-300 ">6.2</span>
      </div>
    </div>
  );
};

export default Card;
