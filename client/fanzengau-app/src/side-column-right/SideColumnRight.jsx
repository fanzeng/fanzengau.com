import { Myblog } from "../myblog/myblogApp/myblog";

export function SideColumnRight() {
  return <>
    <div class="column_uneven_2_6_3_right">
      <div class="section">
        <h2>
          <a href="/myblog" style={{ margin: '0px', padding: '0px' }}>My blogs</a>
          <Myblog />
        </h2>
        <div class="my_blog">
        </div>
      </div>
    </div>
  </>
}