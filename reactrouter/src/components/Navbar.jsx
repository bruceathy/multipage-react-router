import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <header>
      <nav>
        <li>
          <Link to="products">Products</Link>
        </li>
      </nav>
    </header>
  );
}
