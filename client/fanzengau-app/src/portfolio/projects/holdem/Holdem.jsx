import { TryIt } from "../../../try-it/TryIt";

export function Holdem(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return (
      <div className="moreinfo_content tryit_content">
        <a href="/submodules/holdem/index.html">Try the web app</a>
          Please click on the link to try the web app.
          The server side container would spin down if there's no traffic, so you might need to wait a while and refresh for it to work.
        <hr />
        <p>
          To try out the desktop version, please download and extract "Holdem.zip", and run the app inside the "bin" directory on a system with Java Runtime
          Environment (JRE) installed.
        </p>
        <a href="https://github.com/fanzeng/Holdem/blob/master/dist/Holdem.zip?raw=true">Holdem.zip</a>
      </div>
    );
  };
  return <>
    <nav className="intra_page_link" id="texas_holdem"></nav>
    <div className="project_item">
      <h3>Texas Holdem</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_java.png']} alt="Java" border="0" />
        <img className="icon_skills" src={iconResized['icon_spring.png']} alt="Spring" border="0" />
        <img className="icon_skills" src={iconResized['icon_react.png']} alt="React" border="0" />
      </span>
      <h4>The simplest mini app to practice Texas Holdem</h4>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}