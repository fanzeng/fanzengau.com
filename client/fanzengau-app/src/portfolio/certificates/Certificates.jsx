import './Certificates.css';

export function Certificates({certificateImages}) {
  return <>
  <div className="section">
    <a className="intra_page_link" id="certificates"></a>
    <h2>
      Certificates
    </h2>
    <div>
      <div className="certificates-grid">
        <div className="certificate-item">
          <a href="https://www.credly.com/badges/5d0e8980-b755-4695-b8ba-33ad66dfeeb3">
            <img src={certificateImages['GCP_Cert_Cloud_Architect.png']} height="200" width="260" alt="GCP Certificate of Cloud Architect"/>
          </a>
          <a href="https://www.credly.com/badges/5d0e8980-b755-4695-b8ba-33ad66dfeeb3" className="certificate-name">Certified Professional Cloud Architect</a>
        </div>
        <div className="certificate-item">
          <a href="https://www.credly.com/badges/608259ed-a4f8-4f13-8fbf-ad81d56345f4">
            <img src={certificateImages['GCP_Cert_MLE.png']} height="200" width="260" alt="GCP Certificate of Machine Learning Engineer"/>
          </a>
          <a href="https://www.credly.com/badges/608259ed-a4f8-4f13-8fbf-ad81d56345f4" className="certificate-name">Certified Professional Machine Learning Engineer</a>
        </div>
      </div>
      <div className="certificates-grid">
        <div className="certificate-item">
          <img src={certificateImages['ScrumAlliance_CSM_Certificate.png']} height="200" width="260"
            alt="ScrumAlliance CSM Certificate" />
          <a href="#" className="certificate-name">ScrumAlliance CSM Certificate</a>
        </div>
        <div className="certificate-item">
          <a href="https://www.freecodecamp.org/certification/fanzeng/responsive-web-design">
            <img src={certificateImages['freecodecamp_responsive_web_design.png']} height="200" width="260"
              alt="Responsive Web Design"/>
          </a>
          <a href="https://www.freecodecamp.org/certification/fanzeng/responsive-web-design" className="certificate-name">
            Responsive Web Design
          </a>
        </div>
        <div className="certificate-item">
          <a href="https://www.freecodecamp.org/certification/fanzeng/javascript-algorithms-and-data-structures">
            <img src={certificateImages['freecodecamp_javascript_algorithms_and_data_structures.png']}
              height="200" width="260" alt="Javascript Algorithms and Data Structures"/>
          </a>
          <a href="https://www.freecodecamp.org/certification/fanzeng/javascript-algorithms-and-data-structures" className="certificate-name">
            Javascript Algorithms and Data Structures
          </a>
        </div>
        <div className="certificate-item">
          <a href="https://www.freecodecamp.org/certification/fanzeng/front-end-development-libraries">
            <img src={certificateImages['freecodecamp_front_end_development_libraries.png']}
              height="200" width="260" alt="Front End Development Libraries"/>
          </a>
          <a href="https://www.freecodecamp.org/certification/fanzeng/front-end-development-libraries" className="certificate-name">
            Front End Development Libraries
          </a>
        </div>
      </div>
      <div className="center_h">
        <div>
          <table style={{textAlign: 'center'}}>
            <tr>
              <td><img src={certificateImages['hackerrank_java_gold_level.png']}
                  alt="HackerRank Java Gold level"/></td>
            </tr>
            <tr>
              <td><a href="https://www.hackerrank.com/fanzeng" className="center_h">HackerRank Java Gold level</a>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <table style={{textAlign: 'center'}}>
            <tr>
              <td><img src={certificateImages['hackerrank_problem_solving_gold_level_5_star.png']}
                  alt="HackerRank Problem Solving Gold level"/></td>
            </tr>
            <tr>
              <td><a href="https://www.hackerrank.com/fanzeng" className="center_h">HackerRank Problem Solving Gold level</a></td>
            </tr>
          </table>
        </div>
        <div>
          <table style={{textAlign: 'center'}}>
            <tr>
              <td><img src={certificateImages['hackerrank_sql_gold_level.png']}
                  alt="HackerRank SQL Gold Level"/></td>
            </tr>
            <tr>
              <td><a href="https://www.hackerrank.com/fanzeng" className="center_h">HackerRank SQL Gold level</a>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <table style={{textAlign: 'center'}}>
            <tr>
              <td><img src={certificateImages['hackerrank_ruby_gold_level.png']}
                  alt="HackerRank Ruby Gold Level"/></td>
            </tr>
            <tr>
              <td><a href="https://www.hackerrank.com/fanzeng" className="center_h">HackerRank Ruby Gold level</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  </>
}