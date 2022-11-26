import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Overview/Overview";

const { DASHBOARD } = PATHS;

export const ROUTES = [
  { path: DASHBOARD, element: <Dashboard /> },
  { path: "*", element: <Navigate to="/overview" replace /> },
];
