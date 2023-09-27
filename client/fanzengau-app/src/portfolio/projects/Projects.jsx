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
              <a href="#multimedia_toolbox">
                <img className="img_project"
                  src={multimediaToolboxImages['project_multimedia_toolbox.png']} alt="" />
              </a>
            </td>
            <td>
              <a href="#texas_holdem">
                <img className="img_project" src={holdemImages['project_holdem.png']} alt="" />
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
          <nav className="intra_page_link" id="underground_localization"></nav>
          <div className="project_item">
            <h3>Underground Localization</h3>
            <span className="platform_tool">
              <img className="icon_skills" src={iconResized['icon_linux.png']} alt="Linux" />
              <img className="icon_skills_wide" src={iconResized['icon_ros.png']} alt="ROS" />
              <img className="icon_skills" src={iconResized['icon_opencv.png']} alt="OpenCV" />
              <img className="icon_skills" src={iconResized['icon_python.png']} alt="Python" />
              <img className="icon_skills_wide" src={iconResized['icon_bash.png']} alt="bash" />
            </span>
            <h4 className="engraved">Low cost camera-based positioning system</h4>
            <div>
              <iframe width="560" height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLUjd4WCrI1uglVuKXfPZbSsYu3kTxTtgu" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <br /><span className="moreinfo_span_outer"><span className="moreinfo_span_inner">More</span></span><br />
            <div className="moreinfo_content">
              Advance Queensland project for localizing underground mining vehicles with &lt;1m accuracy.<br />
            </div>
          </div>
        </li>
        <li className="project_item">
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
            <br /><span className="moreinfo_span_outer"><span className="moreinfo_span_inner">Try it</span></span><br />
            <div className="moreinfo_content tryit_content">
              <p>

                <a href="/submodules/multimedia-toolbox/index.html">Multimedia Toolbox</a>
              </p>
            </div>
          </div>
        </li>
        <li className="project_item">
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

            <br /><span className="moreinfo_span_outer"><span className="moreinfo_span_inner">Try it</span></span><br />
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
          </div>
        </li>
        <li className="project_item">
          <nav className="intra_page_link" id="texas_holdem"></nav>
          <div className="project_item">
            <h3>Texas Holdem</h3>
            <span className="platform_tool">
              <img className="icon_skills" src={iconResized['icon_i-code-java.png']} alt="I Code Java" border="0" />
            </span>
            <h4 className="engraved">The simplest mini app to practice Texas Holdem</h4>
            <br /><span className="moreinfo_span_outer"><span className="moreinfo_span_inner">Try it</span></span><br />
            <div className="moreinfo_content tryit_content">
              <p>
                To try it out, please download "Holdem.jar", which is executable on a system with Java Runtime
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
          </div>
        </li>
        <li className="project_item">
          <nav className="intra_page_link" id="underwater_vehicle"></nav>
          <div className="project_item" id="underwater_vehicle">
            <h3>6 DOF underwater vehicle</h3>
            <span className="platform_tool">
              <img className="icon_skills" src={iconResized['icon_c.png']} alt="C" />
            </span>
            <h4 className="engraved">AUV built in 3 weeks</h4>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/254dBi0Ic1c" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br /><span className="moreinfo_span_outer"><span className="moreinfo_span_inner">More</span></span><br />
            <div className="moreinfo_content">
              <p>I designed and realised a with Arduino and STM32F407. The vehicle can be freely operated with
                user input from a gamepad. The underwater vehicle is just above 10 kg in weight and so portable
                that a little girl can handle it.</p><br />
            </div>
          </div>
        </li>
        <li className="project_item">
          <nav className="intra_page_link" id="surface_diffusion_sim"></nav>
          <div className="project_item">
            <h3>Surface Diffusion Simulator</h3>
            <span className="platform_tool">
              <img className="icon_skills" src={iconResized['icon_matlab.png']} alt="Matlab" />
            </span>
            <h4 className="engraved">PDE solver for interface front propagation</h4>
            <br /><span className="moreinfo_span_outer"><span className="moreinfo_span_inner">Try it</span></span><br />
            <div className="moreinfo_content tryit_content">
              <a href="https://github.com/fanzeng/surfaceDiffusionSim.git"><img
                src={iconResized['icon_github.png']} height="32" width="32" alt="Github" /></a>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </>
}