import React from "react";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const Card = ({endpoint, name}) => {
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
    <div className="w-full h-[450px] px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-white mt-2">{name}</h1>
        <p className="text-base hover:underline text-gray-400 mt-2 cursor-pointer">Explore More</p>
      </div>
      {/* Cards Container */}
      <div className="flex flex-row overflow-x-auto gap-4 mt-4">
        {dataVideos.map((item,index) => (
          
           <VideoCard key={index} item={item} />
          
        ))}
        
      </div>

        

    </div>
  );
};

export default Card;

