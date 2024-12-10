// import React from "react";
// import "./App.css";
// import OuterHomepage from "./components/OuterHomepage";

// function App() {
//   return (
//     <div>
//       <OuterHomepage/>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Signin from "./components/Auth/Signin";
// import Signup from "./components/Auth/Signup";
// import OuterHomepage from "./components/OuterHomepage";
// import NetflixTvshowpage from "./components/NetflixTvshowpage";
// import NetflixHomepage from "./components/NetflixHomepage";
// import NetflixMoviepage from "./components/NetflixMoviepage";
// import NetflixNewandPopularpage from "./components/NetflixNewandPopularpage";
// import NetflixSearchitemPage from "./components/NetflixSearchitemPage";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";
// import Movieswishlist from "./components/Wishlistpage/Movieswishlist";
// import NetflixWishlistpage from "./components/NetflixWishlistpage";
// import NetflixFavoriteslistpage from "./components/NetflixFavoriteslistpage";

// function App() {
//   return (
//     <div className="bg-black min-h-screen overflow-hidden">
//       <Routes>
//         <Route path="/Homepage" element={<NetflixHomepage/>} />
//         <Route path="/Tvshowpage" element={<NetflixTvshowpage/>} />
//         <Route path="/Moviespage" element={<NetflixMoviepage/>} />
//         <Route path="/New&Popularpage" element={<NetflixNewandPopularpage/>} />
//         <Route path="/NetflixWishlistpage" element={<NetflixWishlistpage/>} />
//         <Route path="/NetflixWishFavoritepage" element={<NetflixFavoriteslistpage/>} />
//         <Route path="/Searchitem" element={<NetflixSearchitemPage/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// import React from 'react'
// import "./App.css";
// // import Signin from "./components/Auth/Signin";
// import Signup from "./components/Auth/Signup";
// // import Footer from "./components/Pages/Footer";



// function App() {
//   return (
//     <div>
//       {/* <Signin/> */}
//       <Signup/>
//       {/* <Footer/> */}
//     </div>
//   )
// }

// export default App


import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import OuterHomepage from "./components/OuterHomepage";
import NetflixTvshowpage from "./components/NetflixTvshowpage";
import NetflixHomepage from "./components/NetflixHomepage";
import NetflixMoviepage from "./components/NetflixMoviepage";
import NetflixNewandPopularpage from "./components/NetflixNewandPopularpage";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import NetflixWishlistpage from "./components/NetflixWishlistpage";
import NetflixSearchitemPage from "./components/NetflixSearchitemPage";
import NetflixFavoriteslistpage from "./components/NetflixFavoriteslistpage";

function App() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<OuterHomepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/Homepage"
          element={
            <ProtectedRoute>
              <NetflixHomepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Moviespage"
          element={
            <ProtectedRoute>
              <NetflixMoviepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Tvshowpage"
          element={
            <ProtectedRoute>
              <NetflixTvshowpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/New&Popularpage"
          element={
            <ProtectedRoute>
              <NetflixNewandPopularpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/NetflixWishlistpage"
          element={
            <ProtectedRoute>
              <NetflixWishlistpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/NetflixWishFavoritepage"
          element={
            <ProtectedRoute>
              <NetflixFavoriteslistpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Searchpage"
          element={
            <ProtectedRoute>
              <NetflixSearchitemPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
