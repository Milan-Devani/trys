import React, { useEffect, useState } from "react";
import TvshowBanner from "./Tvshowpage/TvshowBanner";
import TvshowRow from "./Tvshowpage/TvshowRow";
import TvshowAiringToday from "./Tvshowpage/TvshowAiringToday";
import Navbar from "./Navbar";
import MovieandTvshowTrendingRow from "./Moviepage/MovieandTvshowTrendingRow";
import TvshowRowTrending from "./Tvshowpage/TvshowRowTrending";
import PopularTvshow from "./Tvshowpage/popularTvshow";
import Preloader from "./Preloader";

function NetflixTvshowpage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="main-preloader">
        <Preloader />
      </div>
    );
  }

  return (
    <div>
      <div className="pb-[30px] px-[15px]">
        <Navbar />
        <TvshowBanner />
        <TvshowRowTrending />
        <TvshowAiringToday />
        <PopularTvshow />
      </div>
    </div>
  );
}

export default NetflixTvshowpage;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTVAiringToday } from './Redux/features/Tvshow/TvshowSlice';

// function NetflixTvshow() {
//     const dispatch = useDispatch();
//     const { airingToday, status, error } = useSelector((state) => state.tvshow);

//     useEffect(() => {
//         dispatch(getTVAiringToday());
//     }, [dispatch]);

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error: {error}</p>;

//     return (
//         <div className="text-white">
//             <h1>TV Shows Airing Today</h1>
//             {airingToday.length > 0 ? (
//                 airingToday.map((show) => (
//                     <div key={show.id}>
//                         <h2>{show.name}</h2>
//                         <p>{show.overview}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No shows airing today</p>
//             )}
//         </div>
//     );
// }

// export default NetflixTvshow;
