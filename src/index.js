import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import './FireBase';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
