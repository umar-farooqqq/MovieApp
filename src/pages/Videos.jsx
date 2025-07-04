import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import Bottombar from "../components/Bottombar.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

const Videos = () => {
  return (
    <div>
      <div className="lg:w-full flex flex-row min-h-screen bg-gray-600 ">
        <Sidebar />

        <div className="flex flex-col w-full min-h-screen bg-gray-900 gap-4 min-w-0">
          <Hero endpoint={`movie/popular`} name={"Popular Movies"} />

          <Card endpoint={`movie/popular`} name={"Popular Movies"} />

          <Card endpoint={`tv/popular`} name={"Popular TV Shows"} />

          <Footer />
        </div>
      </div>


    
    </div>
  )
}

export default Videos