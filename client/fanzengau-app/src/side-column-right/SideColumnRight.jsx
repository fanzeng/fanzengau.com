import { Myblog } from "../myblog/myblogApp/myblog";
import { Link } from "react-router-dom";

export function SideColumnRight() {
  return (
    <>
      <div className="column_uneven_2_6_3_right hide-if-mobile">
        <div className="section">
          <h2>
            <Link to="/myblog" style={{ margin: '0px', padding: '0px' }}>My blogs</Link>
          </h2>
          <div className="my_blog side-column-myblog">
            <Myblog />
          </div>
        </div>
      </div>
    </>
  );
}