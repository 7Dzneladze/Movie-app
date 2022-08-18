import axios from "axios";
import { AppDispatch } from "../store";
import api from "../api";
import { movieSlice } from "./MovieSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.moviesFetching());
    const response = await axios.get<any>(api);
    dispatch(movieSlice.actions.moviesFetchingSuccess(response.data.Search));
    console.log(response.data.Search);
  } catch (e: any) {
    dispatch(movieSlice.actions.moviesFetchingError(e.message));
  }
};

export default fetchMovies;
