import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Youtube from "./service/youtube";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const key = "AIzaSyBNhcdE4LbYnmWr9_Mv-GAU5p0yFn9C6YM"
const youtube = new Youtube(process.env.REACT_APP_API_KEY);

root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);

reportWebVitals();
