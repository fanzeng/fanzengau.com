import { TryIt } from "../../../try-it/TryIt";

export function UnderwaterVehicle(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return (
      <div className="moreinfo_content">
        <p>I designed and realised a with Arduino and STM32F407. The vehicle can be freely operated with
          user input from a gamepad. The underwater vehicle is just above 10 kg in weight and so portable
          that a little girl can handle it.</p><br />
      </div>
    );
  };
  return <>
    <nav className="intra_page_link" id="underwater_vehicle"></nav>
    <div className="project_item" id="underwater_vehicle">
      <h3>6 DOF underwater vehicle</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_c.png']} alt="C" />
      </span>
      <h4 className="engraved">AUV built in 3 weeks</h4>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/254dBi0Ic1c"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <TryIt btnText="More">
        <TryItContent />
      </TryIt>
    </div>
  </>
}