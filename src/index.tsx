import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { setupStore } from "./store/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();
root.render(
  <Router basename="dato">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

reportWebVitals();
