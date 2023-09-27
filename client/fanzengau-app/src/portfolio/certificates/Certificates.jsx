export function Certificates({certificateImages}) {
  return <>
  <div className="section">
  <a className="intra_page_link" id="certificates"></a>
  <h2>
    Certificates
  </h2>
  <div>
    <div className="center_h">
      <img src={certificateImages['ScrumAlliance_CSM_Certificate.png']} height="618" width="798"
      alt="ScrumAlliance CSM Certificate"/>
    </div>
    <div className="center_h">
      <a href="https://www.freecodecamp.org/certification/fanzeng/responsive-web-design">
        <img src={certificateImages['freecodecamp_responsive_web_design.png']} height="476" width="840"
          alt="Responsive Web Design"/>
      </a><br/>
      <a href="https://www.freecodecamp.org/certification/fanzeng/javascript-algorithms-and-data-structures">
        <img src={certificateImages['freecodecamp_javascript_algorithms_and_data_structures.png']}
          height="476" width="840" alt="Javascript Algorithms and Data Structures"/>
      </a><br/>
      <a href="https://www.freecodecamp.org/certification/fanzeng/front-end-development-libraries">
        <img src={certificateImages['freecodecamp_front_end_development_libraries.png']}
          height="476" width="840" alt="Front End Development Libraries"/>
      </a><br/>      
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
            <td><a href="https://www.hackerrank.com/fanzeng" className="center_h">HackerRank Problem Solving
                Gold level</a></td>
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