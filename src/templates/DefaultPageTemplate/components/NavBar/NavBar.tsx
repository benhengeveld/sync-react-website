import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = ({ glitch = false }: { glitch?: boolean }) => {
  return (
    <nav>
      <Link
        to="/"
        className={"nav-link crt-object " + (glitch ? "glitch" : "")}
      >
        Home
      </Link>
      <Link
        to="/magic-prices"
        className={"nav-link crt-object " + (glitch ? "glitch" : "")}
      >
        Magic Prices
      </Link>
      <Link
        to="/about"
        className={"nav-link crt-object " + (glitch ? "glitch" : "")}
      >
        About Me
      </Link>
    </nav>
  );
};

export default NavBar;
