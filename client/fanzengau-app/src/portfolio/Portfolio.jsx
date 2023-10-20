import './portfolio.css'
import { Certificates } from './certificates/Certificates';
import { Projects } from "./projects/Projects";
export function Portfolio() {
  const importImages = r => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const iconResized = importImages(require.context('../resource/icon/resized', false, /\.(png|jpe?g|svg)$/));
  const certificateImages = importImages(require.context('../resource/image/certificates', false, /\.(png|jpe?g|svg)$/));

  return <>
    <div id="content">

      <title>Fan Zeng's website. Welcome</title>
      <div className="section">
        <a className="intra_page_link" id="about"></a>
        <h2>
          About me
        </h2>
        <p>
          My name is Fan Zeng, a software engineer in Brisbane, Australia.
          I like using software to solve practical problems.
          I love technology and enjoy learning new things.
          Thanks for visiting.
        </p>
      </div>
      <div className="section">
        <a className="intra_page_link" id="skills"></a>
        <h2>
          My skills
        </h2>
        <table id="skill_table">
          <tr>
            <th>I speak</th>
            <td><img className="icon_skills" src={iconResized['icon_golang.png']} alt="Golang" /><br />Go</td>
            <td><img className="icon_skills" src={iconResized['icon_python.png']} alt="Python" /><br />Python</td>
            <td><img className="icon_skills" src={iconResized['icon_java.png']} alt="Java" border="0" /><br />Java</td>
            <td><img className="icon_skills" src={iconResized['icon_cpp.png']} alt="C++" /><br />C++</td>
            {/* <td><img className="icon_skills" src={iconResized['icon_html.png']} alt="HTML" /><br />HTML</td>
            <td><img className="icon_skills" src={iconResized['icon_css.png']} alt="CSS" /><br />CSS</td> */}
            <td><img className="icon_skills" src={iconResized['icon_js.png']} alt="JavaScript" /><br />JavaScript</td>
            <td><img className="icon_skills" src={iconResized['icon_php.png']} alt="PHP" /><br />PHP</td>
            <td><img className="icon_skills" src={iconResized['icon_sql.png']} alt="SQL" /><br />SQL</td>
            <td><img className="icon_skills_wide" src={iconResized['icon_bash.png']} alt="bash" /><br />bash</td>
          </tr>
          <tr>
            <th>I use</th>
            <td><img className="icon_skills" src={iconResized['icon_git.png']} alt="Git" /><br />Git</td>
            <td>
              <a href="//commons.wikimedia.org/wiki/File:Docker_(container_engine)_logo.png"><img className="icon_skills"
                src={iconResized['icon_docker.png']} alt="Docker" />
              </a><br />Docker
            </td>
            <td>
              <img className="icon_skills" src={iconResized['icon_tensorflow.png']}
                alt="Tensorflow" /><br />Tensorflow
            </td>
            <td>
              <img className="icon_skills" src={iconResized['icon_pytorch.png']}
                alt="pytorch" /><br />PyTorch
            </td>
          </tr>
          <tr>
            <th>I web</th>
            <td><img className="icon_skills_wide" src={iconResized['icon_nodejs.png']} alt="NodeJS" /><br />NodeJS</td>
            <td><img className="icon_skills" src={iconResized['icon_angular.png']} alt="AngularJS" /><br />AngularJS</td>
            <td><img className="icon_skills" src={iconResized['icon_angular.png']} alt="Angular" /><br />Angular</td>
            <td><img className="icon_skills" src={iconResized['icon_react.png']} alt="React" /><br />React</td>
          </tr>
          <tr>
            <th>I know</th>
            <td><img className="icon_skills_wide" src={iconResized['icon_ros.png']} alt="ROS" /><br />ROS</td>
            <td><img className="icon_skills" src={iconResized['icon_opencv.png']} alt="OpenCV" /><br />OpenCV</td>
            <td><img className="icon_skills_wide" src={iconResized['icon_django.png']} alt="Django" /><br />Django</td>
            <td>
              <a rel="nofollow" className="external free" href="https://www.ruby-lang.org/en/about/logo/">
                <img className="icon_skills" src={iconResized['icon_ruby.png']} alt="Ruby" />
              </a><br />Ruby
            </td>
            <td><img className="icon_skills_wide" src={iconResized['icon_rails.png']} alt="Rails" /><br />Rails</td>
            <td><img className="icon_skills_wide" src={iconResized['icon_laravel.png']} alt="Laravel" /><br />Laravel</td>
          </tr>
        </table>
      </div>
      <Projects />
      <Certificates certificateImages={certificateImages} />

      <div className="section">
        <a className="intra_page_link" id="contact"></a>
        <h2>
          Contact
        </h2>
        <p>
          <a href="https://www.linkedin.com/in/fanzengau/"><i className="fab fa-linkedin" style={{ fontSize: '48px' }}></i></a><br />
        </p>
      </div>
      <div id="center_column_footer"></div>
    </div>
  </>
} 