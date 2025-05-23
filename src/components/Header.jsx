import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Name</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}

export default Header;
