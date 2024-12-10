import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/auth/authSlice";
import movieReducer from './features/movies/movieSlice';
import tvshowReducer from './features/Tvshow/TvshowSlice';
import searchReducer from './features/Search/searchSlice';
import wishlistReducer from './features/wishlist/wishlistSlice';
import favoriteReducer from './features/favorite/FavoriteSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    tvshow: tvshowReducer,
    Search: searchReducer,
    wishlistitem: wishlistReducer,
    Favoriteitem: favoriteReducer,
  },
});
