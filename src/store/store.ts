import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/MovieSlice";

const rootReducer = combineReducers({
  movieReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
