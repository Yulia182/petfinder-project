import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="logo" id="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/petSearch">Pets</Link>
        <Link to="/petQuiz">Matching Quiz</Link>
        <Link to="/adoption">Adoption Stories</Link>
      </nav>
    </header>
  );
};

export default Header;
