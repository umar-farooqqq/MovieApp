import React from "react";
import Hero from "../components/Hero";
import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Desp from "../components/Desp";


const Details = () => {

  const {id} = useParams()

  return (
    <div className="bg-blue-500 text-white">
      <div className="lg:w-full flex flex-row min-h-screen bg-gray-600 ">
        <Sidebar />

        <div className="flex flex-col w-full min-h-screen bg-gray-900 gap-4 min-w-0">
          <Hero endpoint={`movie/popular`} name={"Popular Movies"} />

          <Desp endpoint1={`movie/${id}`} endpoint2={`tv/${id}`} />

          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Details;
