import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>
          FOOD<span>EAT</span>
        </h2>
      </div>
      <ul>
        <Link>HOME</Link>
        <Link>MENU</Link>
        <Link>ABOUT</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
