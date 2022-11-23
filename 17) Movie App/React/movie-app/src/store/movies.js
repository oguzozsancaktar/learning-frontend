import { createSlice } from "@reduxjs/toolkit";

const initialMoviesState = { movies: [] };

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    getMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
