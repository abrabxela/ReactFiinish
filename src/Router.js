import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import Films from "./pages/Films";
import ActorDetails from "./pages/ActorDetails";
import Actors from "./pages/Actors";
import Register from "./pages/Auth/Register";
import Auth from "./layout/Auth";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/film",
        element: <PrivateRoute><Films /></PrivateRoute>,
      },
      {
        path: "/film/:filmId",
        element: <PrivateRoute><FilmDetails /></PrivateRoute>,
      },
      {
        path: "/actor",
        element: <PrivateRoute><Actors /></PrivateRoute>,
      },
      {
        path: "/actor/:actorId",
        element: <PrivateRoute><ActorDetails /></PrivateRoute>,
      },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      }, 
    ],
  },
]);

export default router;
