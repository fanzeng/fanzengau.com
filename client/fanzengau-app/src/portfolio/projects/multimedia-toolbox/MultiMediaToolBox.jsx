import { TryIt } from "../../../try-it/TryIt";

export function MultimediaToolBox(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return <a href="/submodules/multimedia-toolbox/index.html">Multimedia Toolbox</a>;
  }
  return <>
    <nav className="intra_page_link" id="multimedia_toolbox"></nav>
    <div className="project_item">
      <h3>Multimedia Toolbox</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_html.png']} alt="HTML" />
        <img className="icon_skills" src={iconResized['icon_css.png']} alt="CSS" />
        <img className="icon_skills" src={iconResized['icon_js.png']} alt="JavaScript" />
        <img className="icon_skills" src={iconResized['icon_php.png']} alt="PHP" />
      </span>
      <h4 className="engraved">A toolbox that makes video and process images</h4>
      <ol>
        <li>video_creator</li>
        create video by uploading individual frames and specifying various parameters.
      </ol>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}