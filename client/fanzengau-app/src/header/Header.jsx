import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Header() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
        <ul id="menu_horizontal">
          <li className="menu_horizontal_item">
            <Link to="/#about">About</Link>
          </li>
          {/* <li className="menu_horizontal_item">
            <Link to="/#skills">Skills</Link>
          </li> */}
          <li className="menu_horizontal_item">
            <Link to="/#projects">Projects</Link>
          </li>
          {/* <li className="menu_horizontal_item">
            <Link to="/#certificates">Certificates</Link>
          </li> */}
          <li className="menu_horizontal_item">
            <Link to="/#contact">Contact</Link>
          </li>
          <li className="menu_horizontal_item">
            <Link to="/myblog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div style={{ height: "80px" }}></div>
    </>
  );
}