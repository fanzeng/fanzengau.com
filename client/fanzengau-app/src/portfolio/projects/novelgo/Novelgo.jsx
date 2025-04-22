import { TryIt } from "../../../try-it/TryIt";

export function Novelgo(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return <>
      <a href="/submodules/novelgo/index.html">Novel Go</a>
        Please click on the link to try the web app.
        The server side container would spin down if there's no traffic, so you might need to wait a while and refresh for it to work.
    </>
  }
  return <>
    <nav className="intra_page_link" id="novelgo"></nav>
    <div className="project_item">
      <h3>Novel Go</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_golang.png']} alt="Go" />
        <img className="icon_skills" src={iconResized['icon_vue.png']} alt="Vue" />
        <img className="icon_skills" src={iconResized['icon_js.png']} alt="JavaScript" />
      </span>
      <h4>Novel Go games written in Go</h4>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}