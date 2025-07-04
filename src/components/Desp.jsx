import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

const Desp = (endpoint1, endpoint2) => {
  const { id } = useParams();

  const [dataVideo, setDataVideo] = useState(null);
  const [type, settype] = useState(null);

  const fetchDataVideo = async () => {
    const m_response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c447267133c687f2505ab84cf9e53056`
    );
    if (m_response.ok) {
      const m_data = await m_response.json();
      setDataVideo(m_data);
      settype("movie");
      return;
    }

    const tv_response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=c447267133c687f2505ab84cf9e53056`
    );
    if (tv_response.ok) {
      const tv_data = await tv_response.json();
      setDataVideo(tv_data);
      settype("tv");
      return;
    }
  };
  useEffect(() => {
    fetchDataVideo();
  }, [id]);

  if (!dataVideo) return <div className="text-white">Loading....</div>;

  return (
    <div>
      <div className="flex items-center justify-center gap-x-6 w-full h-[100px] bg-gray-800 lg:gap-x-24">
        <h1 className="text-2xl font-semibold text-white cursor-pointer hover:underline">
          OVERVIEW
        </h1>

        <Link to="/videos">
          <button>
            <h1 className="text-2xl font-semibold text-white cursor-pointer hover:underline">
              VIDEOS
            </h1>
          </button>
        </Link>

        <Link to="/photos">
        <button>
          <h1 className="text-2xl font-semibold text-white cursor-pointer hover:underline">
          PHOTOS
        </h1>
        </button>
        </Link>

      </div>

      <div className="flex items-center justify-center  sm:gap-x-2 md:gap-x-4 lg:gap-x-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${dataVideo?.poster_path}`}
          alt=""
          className="hidden md:block md:w-[300px] md:h-[450px] md:ml-4 lg:w-[350px] lg:h-[500px] mt-4"
        />

        <div className="w-[500px]">
          <h1 className="text-3xl ml-4 my-4">Storyline</h1>
          <p className="ml-4">{dataVideo.overview || "No description"}</p>

          <div className="pt-4 ml-4 my-">
            <p className="my-1">
              Released{" "}
              <span className="ml-6">
                {dataVideo.release_date || dataVideo.first_air_date || "N/A"}
              </span>{" "}
            </p>

            <p className="my-1">
              Runtime{" "}
              <span className="ml-7">
                {dataVideo.runtime || dataVideo.episode_run_time?.[0] || "N/A"}{" "}
                mins
              </span>{" "}
            </p>

            {type === "movie" && (
              <p className="my-1">
                Budget{" "}
                <span className="ml-9">
                  ${dataVideo.budget?.toLocaleString() || "N/A"}
                </span>{" "}
              </p>
            )}

            {type === "movie" && (
              <p className="my-1">
                Revenue{" "}
                <span className="ml-7">
                  ${dataVideo.revenue?.toLocaleString() || "N/A"}
                </span>{" "}
              </p>
            )}

            <p className="my-2 ">
              Genre{" "}
              <span className="bg-gray-500 border 2 rounded-lg text-sm ml-12 p-0.5">
                {dataVideo.genres?.map((g) => (
                  <button key={g.id} className="mx-2">
                    {g.name}
                  </button>
                )) || "N/A"}
              </span>{" "}
              {/* <span className="bg-gray-500 border 2 rounded-lg text-sm ml-2 p-1">
                Comedy
              </span>{" "}
              <span className="bg-gray-500 border 2 rounded-lg text-sm ml-2 p-1">
                Adventure
              </span>{" "}
              <span className="bg-gray-500 border 2 rounded-lg text-sm ml-2 p-1">
                Fantasy
              </span>{" "} */}
            </p>

            <p className="my-1">
              Status <span className="ml-12">{dataVideo.status || "N/A"}</span>{" "}
            </p>
            <p className="my-1">
              Language{" "}
              <span className="ml-6">
                {dataVideo.original_language?.toUpperCase() || "N/A"}
              </span>{" "}
            </p>
            <p className="my-1 flex">
              Production{" "}
              <span className="ml-5 line-clamp-3">
                {dataVideo.production_companies
                  ?.map((c) => c.name)
                  .join(", ") || "N/A"}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desp;
