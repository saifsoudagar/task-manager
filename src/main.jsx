
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store"; // Ensure this path points to your Redux store setup
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter  future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
