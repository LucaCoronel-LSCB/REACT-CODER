import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="logo">All chapters FREE </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Category/Human" activeClassName="active">
            Human
          </NavLink>
        </li>
        <li>
          <NavLink to="/Category/Alien" activeClassName="active">
            Alien
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
