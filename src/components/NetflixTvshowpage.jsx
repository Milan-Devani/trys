import React, { useEffect, useState } from "react";
import TvshowBanner from "./Tvshowpage/TvshowBanner";
import TvshowRow from "./Tvshowpage/TvshowRow";
import TvshowAiringToday from "./Tvshowpage/TvshowAiringToday";
import Navbar from "./Navbar";
import TvshowRowTrending from "./Tvshowpage/TvshowRowTrending";
import PopularTvshow from './Tvshowpage/popularTvshow';
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
