import React from "react";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

const Hero = ({endpoint}) => {
   const [dataVideos, setdataVideos] = useState([]);

  const fetchVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=c447267133c687f2505ab84cf9e53056`
    );

    const data = await response.json();
    console.log(data.results);
    setdataVideos(data.results);
  };

  useEffect(() => {
    fetchVideos();
  }, []);


  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${dataVideos[0]?.poster_path}')`,
      }}
      className="relative bg-cover bg-center h-[300px] w-full pl-8 pt-24 lg:h-[550px] "
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.2) 85%)",
        }}
      ></div>

      <div className="relative z-10 lg:mt-20">
        <h1 className="font-semibold text-3xl text-white">{dataVideos[0]?.title || dataVideos[0]?.name}</h1>
        <div className="flex mt-4 mb-2 text-[#00AD99]">
          <Star className="fill-[#00AD99]" />
          <Star className="fill-[#00AD99]" />
          <Star className="fill-[#00AD99]" />
          <Star />
          <Star />
          <span className="ml-2 text-gray-300">· 2025 · 1h 56min</span>
        </div>
        <p className="text-sm text-gray-300 line-clamp-3 lg:w-[600px] lg:text-lg">
          {dataVideos[0]?.overview || "No description"}
        </p>
      </div>
    </div>
  );
};
export default Hero;
