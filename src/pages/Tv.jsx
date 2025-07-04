import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Bottombar from "../components/Bottombar.jsx";
import Footer from "../components/Footer.jsx";

const Tv = ({ endpoint }) => {
  return (
    <div>
      <div className="lg:w-full flex flex-row min-h-screen bg-gray-600 ">
        <Sidebar />

        <div className="flex flex-col w-full min-h-screen bg-gray-900 gap-4 min-w-0">
          <Hero endpoint={`tv/popular`} />

          <Card endpoint={`tv/popular`} name={"Popular TV Shows"} />

          <Card endpoint={`tv/top_rated`} name={"Top Rated TV Shows"} />

          <Card endpoint={`tv/airing_today`} name={"TV Shows Airing Today"} />

          <Footer />
        </div>
      </div>

      
    </div>
  );
};

export default Tv;
