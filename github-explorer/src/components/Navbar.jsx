import { Link, NavLink } from "react-router-dom";
import NexhubLogo from "./NexhubLogo";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo" aria-label="Nexhub home">
        <NexhubLogo size="sm" glow className="navbar-mark" />
        <span>Nexhub</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>

        <NavLink to="/compare">
          Compare
        </NavLink>

        <NavLink to="/favourites">
          Favourites
        </NavLink>
      </div>


    </nav>
  );
}

export default Navbar;
