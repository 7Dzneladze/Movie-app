import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MovieState {
  movies: any[];
  loading: boolean;
  error: string;
  selectedMovie: any[];
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: "",
  selectedMovie: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    moviesFetching(state) {
      state.loading = true;
    },
    moviesFetchingSuccess(state, action: PayloadAction<any[]>) {
      state.loading = false;
      state.error = "";
      state.movies = action.payload;
    },
    moviesFetchingError(state, aciton: PayloadAction<string>) {
      state.loading = false;
      state.error = aciton.payload;
    },
    selectMovie(state, action: PayloadAction<any[]>) {
      state.loading = false;
      state.error = "";
      state.selectedMovie = action.payload;
    },
    sortMovies(state) {
      const sortedMovies = state.movies.sort((a, b) => {
        if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
          return -1;
        }
        if (a.Title.toLowerCase() > b.Title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      state.movies = sortedMovies;
    },
    searchMovies(state, action: PayloadAction<string>) {
      const filteredMovies = state.movies.filter((item) =>
        item.Title.toLowerCase().includes(action.payload)
      );
      state.movies = filteredMovies;
    },
  },
});

export const {
  searchMovies,
  sortMovies,
  selectMovie,
  moviesFetching,
  moviesFetchingError,
  moviesFetchingSuccess,
} = movieSlice.actions;

export default movieSlice.reducer;
