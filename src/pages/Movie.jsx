import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Bottombar from "../components/Bottombar";
import Footer from "../components/Footer";

const Movie = ({ endpoint }) => {
  return (
    <div>
      <div className="lg:w-full flex flex-row min-h-screen bg-gray-600 ">
        <Sidebar />

        <div className="flex flex-col w-full min-h-screen bg-gray-900 gap-4 min-w-0">
          <Hero endpoint={`movie/popular`} />

          <Card endpoint={`movie/popular`} name={"Popular Movies"} />

          <Card endpoint={`movie/top_rated`} name={"Top Rated Movies"} />

          <Card endpoint={`movie/upcoming`} name={"Upcoming Movies"} />

          <Card endpoint={`movie/now_playing`} name={"Now Playing Movies"} />

          <Footer />
        </div>
      </div>

    </div>
  );
};

export default Movie;
