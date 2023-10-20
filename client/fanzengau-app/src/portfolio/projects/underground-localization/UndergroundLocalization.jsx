import { TryIt } from "../../../try-it/TryIt";

export function UndergroundLocalization(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return (
      <div className="moreinfo_content">
        Advance Queensland project for localizing underground mining vehicles with &lt;1m accuracy.<br />
      </div>
    );
  };
  return <>
    <nav className="intra_page_link" id="underground_localization"></nav>
    <div className="project_item">
      <h3>Underground Localization</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_linux.png']} alt="Linux" />
        <img className="icon_skills_wide" src={iconResized['icon_ros.png']} alt="ROS" />
        <img className="icon_skills" src={iconResized['icon_cpp.png']} alt="C++" />
        <img className="icon_skills" src={iconResized['icon_opencv.png']} alt="OpenCV" />
        <img className="icon_skills" src={iconResized['icon_python.png']} alt="Python" />
        <img className="icon_skills_wide" src={iconResized['icon_bash.png']} alt="bash" />
      </span>
      <h4 className="engraved">Low cost camera-based positioning system</h4>
      <div>
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLUjd4WCrI1uglVuKXfPZbSsYu3kTxTtgu"
          allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <TryIt btnText="More">
        <TryItContent />
      </TryIt>
    </div>
  </>
}