import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Search from "./pages/Search";
import Bottombar from "./components/Bottombar";
import Details from "./pages/Details";
import Videos from "./pages/Videos"
import Photos from "./pages/Photos"

const App = () => {
  return (
    <div className="bg-gray-600 w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/photos" element={<Photos/>} />
      </Routes>
      <Bottombar />
    </div>
  );
};
export default App;
