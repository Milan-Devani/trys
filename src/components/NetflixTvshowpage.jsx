import React, { useEffect, useState } from "react";
import TvshowBanner from "./Tvshowpage/TvshowBanner";
import TvshowRow from "./Tvshowpage/TvshowRow";
import TvshowAiringToday from "./Tvshowpage/TvshowAiringToday";
import Navbar from "./Navbar";
import TvshowRowTrending from "./Tvshowpage/TvshowRowTrending";
import Preloader from "./Preloader";
import Populartv from "./Tvshowpage/Populartv";

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
        <Populartv/>
      </div>
    </div>
  );
}

export default NetflixTvshowpage;
