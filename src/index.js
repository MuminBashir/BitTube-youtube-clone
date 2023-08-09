import React from "react";
import reactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";

import App from "./App";
import "./index.css";

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
