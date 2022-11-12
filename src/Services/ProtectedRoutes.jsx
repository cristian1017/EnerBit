import { useSelector } from "react-redux";
import {Outlet, Navigate} from "react-router-dom";

export const ProtectedRoutes = () => {
  const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet /> : <Navigate to="/login" />
};

export const ProtectedRoutesLogin = () => {
  const auth = localStorage.getItem("loggedin");
  return !auth ? <Outlet /> : <Navigate to="/home" />
};


