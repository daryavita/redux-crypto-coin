import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      <Link to="/fav" className="navigation__link">Favourites</Link>
    </nav>
  );
}

export default Navigation;
