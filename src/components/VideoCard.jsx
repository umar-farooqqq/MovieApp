import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const VideoCard = ({ index, item }) => {
  return (
    <div className="flex-shrink-0 items-center overflow-hidden w-52">
      <Link to={`/details/${item?.id}`} className="block">
        <img
          src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
          alt=""
          className="h-[300px] w-[100%] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        />
        <p className="text-white mt-2 line-clamp-2">{item?.title || item?.name}</p>
        <div className="flex items-center mb-2 text-[#00AD99]">
          <Star className="fill-[#00AD99] w-4 h-4" />
          <Star className="fill-[#00AD99] w-4 h-4" />
          <Star className="fill-[#00AD99] w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <span className="ml-2 text-gray-300 ">{item?.vote_average}</span>
        </div>
      </Link>
    </div>
  );
};
export default VideoCard;
