// src/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const FavoriteSlice = createSlice({
  name: 'Favoriteitem',
  initialState: {
    items: [], 
  },
  reducers: {
    movieaddToFavoritelist: (state, action) => {
      state.items.push(action.payload); 
    },
    tvshowaddToFavoritelist: (state, action) => {
      state.items.push(action.payload); 
    },
  },
});

export const { movieaddToFavoritelist , tvshowaddToFavoritelist } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
