import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Bottombar from "../components/Bottombar.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <div className="lg:w-full flex flex-row min-h-screen bg-gray-600 ">
        <Sidebar />

        <div className="flex flex-col w-full min-h-screen bg-gray-900 gap-4 min-w-0">
          <Hero endpoint={`movie/popular`} name={"Popular Movies"} />

          <p className="text-white text-3xl  pl-8 pb-80 pt-4">No Photos Available Right Now</p>

          <Footer />
        </div>
      </div>

    
    </div>
  );
};

export default Home;
