import { TryIt } from "../../../try-it/TryIt";

export function Eartunes(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return (
      <div className="moreinfo_content tryit_content">
        <p>
          In order to use the app, you would need to agree to turn on your microphone
          when your browser asks for your permission.
          It runs locally in your browser and nothing will be recorded.
          Note: Please make sure you know what you're doing before any DIY tuning.<br />
          Enjoy!
          <a href="/submodules/eartunes/public/index.html">click here to try eartunes</a>
        </p>
        <p>
          source:
          <a href="https://github.com/fanzeng/eartunes.git"><img src={iconResized['icon_github.png']}
            height="32" width="32" alt="Github" /></a>
        </p>
      </div>
    );
  };
  return <>
    <nav className="intra_page_link" id="eartunes"></nav>
    <div className="project_item">
      <h3>eartunes</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_js.png']} alt="JavaScript" />
      </span>
      <h4 className="engraved">single page app to aid music instrument tuning</h4>
      <p>
        I developed this app to assist piano tuning. <br />
        Simply play the note and the app will tell you the direction and amount of adjustment. <br />
        No need for beat counting any more. <br />
        Works especially well within the temperament octave. <br />
      </p>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}