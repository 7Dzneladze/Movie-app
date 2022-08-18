import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import App from "./App";
import MovieListing from "./components/MovieListing";

const store = setupStore();
describe("testing events", () => {
  it("should change input value", () => {
    render(
      <Provider store={store}>
        <MovieListing />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText("Search value");
    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(inputElement).toHaveValue("New value");
  });
});
