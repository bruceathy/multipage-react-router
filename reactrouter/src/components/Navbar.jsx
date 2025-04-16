import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

export default function MainNavbar() {
  return (
    <header>
      <nav>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
