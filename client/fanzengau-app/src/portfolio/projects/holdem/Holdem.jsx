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
          If you prefer to run the app on your local computer, please download "Holdem.zip", which contains executables on a system with Java Runtime
          Environment (JRE) installed.
        </p>
        <a href="https://github.com/fanzeng/Holdem/blob/master/dist/Holdem.zip?raw=true">Holdem.jar</a>
        <br />
        <p>
          The above program displays cards as text. If you'd like to see graphics, please extract the
          following zip into the same folder as the application.
        </p>
        <a href="https://github.com/fanzeng/Holdem/blob/master/holdem/app/resource.zip?raw=true">resource.zip</a>
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
      <h4 className="engraved">The simplest mini app to practice Texas Holdem</h4>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}