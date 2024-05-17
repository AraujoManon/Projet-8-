import { NavLink } from "react-router-dom";
import logoKaza from "../images/LOGO.png";
const Header = () => {
  return (
    <div className="header">
    <img className="logoKaza" src={logoKaza} alt="Logo Kasa" />
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
        <p>Accueil</p>
      </NavLink>
      <NavLink to="/About"className={({ isActive }) => (isActive ? "underline" : "")}>
        <p>A Propos</p>
      </NavLink>
    </nav>
  </div>
  );
};
export default Header;
