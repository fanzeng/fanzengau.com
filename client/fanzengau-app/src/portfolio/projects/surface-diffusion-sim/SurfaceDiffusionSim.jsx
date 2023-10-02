import { TryIt } from "../../../try-it/TryIt";

export function SurfaceDiffusionSim(props) {
  const iconResized = props.iconResized;
  const TryItContent = () => {
    return (
      <div className="moreinfo_content tryit_content">
        <a href="https://github.com/fanzeng/surfaceDiffusionSim.git"><img
          src={iconResized['icon_github.png']} height="32" width="32" alt="Github" /></a>
      </div>
    );
  };
  return <>
    <nav className="intra_page_link" id="surface_diffusion_sim"></nav>
    <div className="project_item">
      <h3>Surface Diffusion Simulator</h3>
      <span className="platform_tool">
        <img className="icon_skills" src={iconResized['icon_matlab.png']} alt="Matlab" />
      </span>
      <h4 className="engraved">PDE solver for interface front propagation</h4>
      <TryIt>
        <TryItContent />
      </TryIt>
    </div>
  </>
}