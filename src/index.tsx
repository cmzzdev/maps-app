import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

if (!navigator.geolocation) {
  const errorGeoActivated = "Your browser have not the active Geolocation";
  alert(errorGeoActivated);
  throw new Error(errorGeoActivated);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
