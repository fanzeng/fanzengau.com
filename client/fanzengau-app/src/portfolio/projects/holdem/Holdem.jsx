import { TryIt } from "../../../try-it/TryIt";

export function Holdem(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return (
      <div className="moreinfo_content tryit_content">
        <a href="/submodules/holdem/index.html">Try the webapp</a>
        <p>
          If you prefer to run the app on your local computer, please download "Holdem.jar", which is executable on a system with Java Runtime
          Environment (JRE) installed.
          If double click does not work, try "java -jar Holdem.jar" in termainal/PowerShell.
        </p>
        <a href="https://github.com/fanzeng/Holdem/blob/master/dist/Holdem.jar?raw=true">Holdem.jar</a>
        <br />
        <p>
          The above program displays cards as text. If you'd like to see graphics, please extract the
          following zip into the same folder as Holdem.jar
        </p>
        <a href="https://github.com/fanzeng/Holdem/blob/master/resource.zip?raw=true">resource.zip</a>
      </div>
    );
  };
  return <>
    <nav className="intra_page_link" id="texas_holdem"></nav>
    <div className="project_item">
      <h3>Texas Holdem</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_i-code-java.png']} alt="I Code Java" border="0" />
      </span>
      <h4 className="engraved">The simplest mini app to practice Texas Holdem</h4>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}