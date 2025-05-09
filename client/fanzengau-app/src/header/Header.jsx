import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div id="fanzengau_banner">
        <div className="docktop_bg" id="docktop_bg">
          <div className="docktop_fg" id="docktop_fg">
            <Link to="/" id="a_fanzengau_banner">
              <span id="fanzeng">fanzeng</span>
              <span id="au">au</span>
              <span id="dotcom">.com</span>
            </Link>
          </div>
        </div>
      </div>
      <nav className="menu">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          id="menu_horizontal"
          className={menuOpen ? "menu_open" : "menu_closed"}
        >
          <li className="menu_horizontal_item">
            <Link to="/#about" onClick={closeMenu}>About</Link>
          </li>
          <li className="menu_horizontal_item">
            <Link to="/myblog" onClick={closeMenu}>Blog</Link>
          </li>
          <li className="menu_horizontal_item">
            <Link to="/#skills" onClick={closeMenu}>Skills</Link>
          </li>
          <li className="menu_horizontal_item">
            <Link to="/#projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li className="menu_horizontal_item">
            <Link to="/#certificates" onClick={closeMenu}>Certificates</Link>
          </li>
          <li className="menu_horizontal_item">
            <Link to="/#contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div id="top_place_holder"></div>
    </>
  );
}