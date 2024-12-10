import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchMoviesandTvshow } from '../../../Api/api';

export const getsearchMoviesandTvshow = createAsyncThunk(
  'Search/searchMoviesandTvshow',
  async ({ query }, { rejectWithValue }) => {
    try {
      const searchResults = await searchMoviesandTvshow(query);
      return searchResults;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const searchSlice = createSlice({
  name: 'Search',
  initialState: {
    search: [],
    trailerKey: null,
    status: 'idle',
    error: null,
  },

  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getsearchMoviesandTvshow.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getsearchMoviesandTvshow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.search = action.payload;
      })
      .addCase(getsearchMoviesandTvshow.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  },
});

export default searchSlice.reducer;


