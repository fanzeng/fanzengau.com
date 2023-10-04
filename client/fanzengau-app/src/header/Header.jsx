export function Header() {
  return <>
    <div id="fanzengau_banner">
      <div className="docktop_bg" id="docktop_bg">
        <div className="docktop_fg" id="docktop_fg">
          <a href="/" id="a_fanzengau_banner"><span id="fanzeng">fanzeng</span><span
            id="au">au</span><span id="dotcom">.com</span></a>
        </div>
      </div>
    </div>
    <nav className="menu">
      <ul id="menu_horizontal">
        <li className="menu_horizontal_item"><a href="/#about">About</a></li>
        <li className="menu_horizontal_item"><a href="/#skills">Skills</a></li>
        <li className="menu_horizontal_item"><a href="/#projects">Projects</a></li>
        <li className="menu_horizontal_item"><a href="/#certificates">Certificates</a></li>
        <li className="menu_horizontal_item"><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
    <div style={{ height: '80px' }}></div>
  </>
}