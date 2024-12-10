import React, { useEffect, useState } from "react";
import Banner from "./new&popular/Banner";
import PopularMoviesRow from "./Moviepage/PopularMoviesRow";
import NowPlayMoviePage from "./Moviepage/NowPlayMovieRow";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import PopularTvshow from "./Tvshowpage/popularTvshow";
import Homebanner from "./Homepage/Homebanner";

function NetflixNewandPopularpage() {
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
        <Homebanner />
        <PopularMoviesRow />
        <NowPlayMoviePage />
        <PopularTvshow />
      </div>
    </div>
  );
}

export default NetflixNewandPopularpage;
