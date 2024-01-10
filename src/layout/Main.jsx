import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
