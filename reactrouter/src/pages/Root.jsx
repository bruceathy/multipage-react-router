import { Outlet } from "react-router-dom";
import MainNavbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}
