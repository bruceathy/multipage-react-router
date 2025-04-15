import { Outlet } from "react-router-dom";
import MainNavbar from "../components/Navbar";
import classes from "./Root.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavbar />
      <div className={classes.content}>
        <Outlet />
      </div>
    </>
  );
}
