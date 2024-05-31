import { useContext } from "react";
import { PlacesContext } from "../context";
import { Loading } from "./";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  return <>{isLoading ? <Loading /> : <>{userLocation?.join(",")}</>}</>;
};
