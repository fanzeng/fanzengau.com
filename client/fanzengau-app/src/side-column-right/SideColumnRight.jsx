import { Myblog } from "../myblog/myblogApp/myblog";

export function SideColumnRight() {
  return <>
    <div className="column_uneven_2_6_3_right hide-if-mobile">
      <div className="section">
        <h2>
          <a href="/myblog" style={{ margin: '0px', padding: '0px' }}>My blogs</a>
          <Myblog />
        </h2>
        <div className="my_blog">
        </div>
      </div>
    </div>
  </>
}