import { Eartunes } from "./eartunes/Eartunes";
import { Holdem } from "./holdem/Holdem";
import { MultimediaToolBox } from "./multimedia-toolbox/MultiMediaToolBox";
import { SurfaceDiffusionSim } from "./surface-diffusion-sim/SurfaceDiffusionSim";
import { UndergroundLocalization } from "./underground-localization/UndergroundLocalization";
import { UnderwaterVehicle } from "./underwater-vehicle/UnderwaterVehicle";

export function Projects() {

  const importImages = r => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const iconResized = importImages(require.context('../../resource/icon/resized', false, /\.(png|jpe?g|svg)$/));

  const aqipImages = importImages(require.context('../../resource/image/projects/aqip', false, /\.(png|jpe?g|svg)$/));
  const holdemImages = importImages(require.context('../../resource/image/projects/holdem', false, /\.(png|jpe?g|svg)$/));
  const multimediaToolboxImages = importImages(require.context('../../resource/image/projects/multimedia_toolbox', false, /\.(png|jpe?g|svg)$/));
  const underwaterVehicleImages = importImages(require.context('../../resource/image/projects/underwater_vehicle', false, /\.(png|jpe?g|svg)$/));
  const surfaceDiffusionSimImages = importImages(require.context('../../resource/image/projects/surface_diffusion_sim', false, /\.(png|jpe?g|svg)$/));

  return <>
    <div className="section">
      <a className="intra_page_link" id="projects"></a>
      <h2>
        My projects
      </h2>
      <div>
        <table id="project_table">
          <tr>
            <td>
              <a href="#underground_localization">
                <img className="img_project" src={aqipImages['project_aqip.png']} alt="" />
              </a>
            </td>
            <td>
              <a href="#texas_holdem">
                <img className="img_project" src={holdemImages['project_holdem.png']} alt="" />
              </a>
            </td>
            <td>
              <a href="#multimedia_toolbox">
                <img className="img_project"
                  src={multimediaToolboxImages['project_multimedia_toolbox.png']} alt="" />
              </a>
            </td>
            <td>
              <a href="#underwater_vehicle">
                <img className="img_project"
                  src={underwaterVehicleImages['project_underwater_vehicle.png']} alt="" />
              </a>
            </td>
            <td>
              <a href="#surface_diffusion_sim">
                <img className="img_project"
                  src={surfaceDiffusionSimImages['project_surface_diffusion_sim.png']} alt="" />
              </a>
            </td>
          </tr>
        </table>
      </div>
      <ul>
        <li className="project_item">
          <UndergroundLocalization iconResized={iconResized} />
        </li>
        <li className="project_item">
          <Holdem iconResized={iconResized} />
        </li>
        <li className="project_item">
          <MultimediaToolBox iconResized={iconResized} />
        </li>
        <li className="project_item">
          <Eartunes iconResized={iconResized} />
        </li>
        <li className="project_item">
          <UnderwaterVehicle iconResized={iconResized} />
        </li>
        <li className="project_item">
          <SurfaceDiffusionSim iconResized={iconResized} />
        </li>
      </ul>
    </div>
  </>
}