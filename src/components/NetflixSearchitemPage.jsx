import React from "react";
import NetflixMoiveSearchPage from "./Searchitem/NetflixMoiveSearchPage";
import NetflixTvshowSearchPage from "./Searchitem/NetflixTvshowSearchPage";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function NetflixSearchitemPage() {
  const search = useSelector((state) => state.Search);

  console.log("search", search.search);

  let searchitems = search.search;

  const moviesearchitems = searchitems.filter(
    (item) => item.media_type === "movie"
  );

  const searchtvshowlist = searchitems.filter(
    (item) => item.media_type === "tv" || !item.media_type
  );

  return (
    <div className="">
      <Navbar />
      <div className="px-16">
        <div className="pb-[35px] pt-[20px]">
          <h1 className="text-[24px] font-NetflixSans text-white underline">
            Search 
          </h1>
        </div>
        {moviesearchitems.length > 0 && <NetflixMoiveSearchPage />}
        {searchtvshowlist.length > 0 && <NetflixTvshowSearchPage />}
      </div>
    </div>
  );
}

export default NetflixSearchitemPage;
