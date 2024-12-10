import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Movieswishlist from "./Wishlistpage/Movieswishlist";
import Tvshowswishlist from "./Wishlistpage/Tvshowswishlist";
import Preloader from "./Preloader";
import MoviesFavoriteslist from "./Favoritespage/MoviesFavoriteslist";
import TvshowFavoriteslist from "./Favoritespage/TvshowFavoriteslist";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NetflixFavoriteslistpage() {
  const [loading, setLoading] = useState(true);
  const Favoriteitem = useSelector((state) => state.Favoriteitem.items);

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

  const moviefavoritesitems = Favoriteitem.filter(
    (item) => item.media_type === "movie"
  );

  const tvshowfavoritesitems = Favoriteitem.filter(
    (item) => item.media_type === "tv" || !item.media_type
  );

  const isEmpty = moviefavoritesitems.length === 0 && tvshowfavoritesitems.length === 0;

  return (
    <div className="">
      <Navbar />
      <div className="px-16">
        <div className="pb-[35px] pt-[20px]">
          <h1 className="text-[24px] font-NetflixSans text-white underline">
            My Favoriteslist
          </h1>
        </div>
        {isEmpty ? (
          <div className="text-white text-center">
            <p></p>
            <Link to="/Homepage" >No Favorites added</Link>
          </div>
        ) : (
          <>
            {moviefavoritesitems.length > 0 && <MoviesFavoriteslist />}
            {tvshowfavoritesitems.length > 0 && <TvshowFavoriteslist />}
          </>
        )}
      </div>
    </div>
  );
}

export default NetflixFavoriteslistpage;



// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Movieswishlist from "./Wishlistpage/Movieswishlist";
// import Tvshowswishlist from "./Wishlistpage/Tvshowswishlist";
// import Preloader from "./Preloader";
// import MoviesFavoriteslist from "./Favoritespage/MoviesFavoriteslist";
// import TvshowFavoriteslist from "./Favoritespage/TvshowFavoriteslist";
// import { useSelector } from "react-redux";

// function NetflixFavoriteslistpage() {

//   const [loading, setLoading] = useState(true);
//   const Favoriteitem = useSelector((state) => state.Favoriteitem.items);


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="main-preloader">
//         <Preloader />
//       </div>
//     );
//   }

//   const moviefavoritesitems = Favoriteitem.filter(
//     (item) => item.media_type === "movie"
//   );

//   const tvshowfavoritesitems = Favoriteitem.filter(
//     (item) => item.media_type === "tv" || !item.media_type
//   );

//   return (
//     <div className="">
//       <Navbar />
//       <div className="px-16">
//         <div className="pb-[35px] pt-[20px]">
//           <h1 className="text-[24px] font-NetflixSans text-white underline">
//             My Favoriteslist
//           </h1>
//         </div>
//         {moviefavoritesitems.length > 0 && <MoviesFavoriteslist />}
//        {tvshowfavoritesitems.length > 0 && <TvshowFavoriteslist />}
//       </div>
//     </div>
//   );
// }

// export default NetflixFavoriteslistpage;