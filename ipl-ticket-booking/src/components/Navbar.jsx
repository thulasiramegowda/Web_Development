
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="brand-icon">🏏</span>
        <span>IPL <strong>ARENA</strong></span>
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/matches">Matches</NavLink>
        <NavLink to="/booking">Book Tickets</NavLink>
        <NavLink to="/history">Booking History</NavLink>
      </div>

      <NavLink to="/matches" className="navbar-cta">
        Explore Now <span>↗</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
