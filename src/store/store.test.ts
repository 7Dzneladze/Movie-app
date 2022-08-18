import MovieSlice, {
  moviesFetching,
  moviesFetchingSuccess,
  searchMovies,
  selectMovie,
  sortMovies,
  MovieState,
} from "./slices/MovieSlice";

const initialState: MovieState = {
  error: "",
  loading: false,
  movies: [],
  selectedMovie: [],
};

describe("testing reducer actions", () => {
  it("should return default state when passin an empty action", () => {
    const result = MovieSlice(initialState, { type: "" });
    expect(result).toEqual(initialState);
  });

  it("should return state with passed data", () => {
    const fakeMovieArr = [{ value: "data" }, { value: "data" }];
    const action = { type: moviesFetchingSuccess.type, payload: fakeMovieArr };
    const result = MovieSlice(initialState, action);
    expect(result.movies).toEqual(fakeMovieArr);
  });
  it("should sort items in array alpabeticaly by title", () => {
    initialState.movies = [
      { Title: "Zero" },
      { Title: "Banana" },
      { Title: "Drama" },
    ];
    const expectedResult = initialState.movies.sort((a, b) => {
      if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
        return -1;
      }
      if (a.Title.toLowerCase() > b.Title.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    const action = { type: sortMovies.type };
    const result = MovieSlice(initialState, action);
    expect(result.movies).toEqual(expectedResult);
  });
  it("should find items by title and return only finded items", () => {
    const state = {
      error: "",
      loading: false,
      movies: [{ Title: "Zero" }, { Title: "Banana" }, { Title: "Drama" }],
      selectedMovie: [],
    };
    const expectedResult = [{ Title: "Drama" }];
    const action = { type: searchMovies.type, payload: "dr" };
    const result = MovieSlice(state, action);
    expect(result.movies).toEqual(expectedResult);
  });
  it("should save selected movie in special property", () => {
    const action = { type: selectMovie.type, payload: initialState.movies[0] };
    const result = MovieSlice(initialState, action);
    expect(result.selectedMovie).toEqual(action.payload);
  });
  // reset initial state value
  initialState.selectedMovie = [];
  initialState.movies = [];
});
