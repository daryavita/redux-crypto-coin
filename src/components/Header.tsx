import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
