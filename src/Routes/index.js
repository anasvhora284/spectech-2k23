import { Navigate, createBrowserRouter } from "react-router-dom";
import EventsPage from "../pages/EventsPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
]);

export default router;
