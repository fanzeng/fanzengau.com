export function SideColumnLeft() {
  const importImages = r => {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const iconResized = importImages(require.context('../resource/icon/resized', false, /\.(png|jpe?g|svg)$/));
  return <>
    <div className="column_uneven_2_6_3_left_invisible"><br /></div>
    <div className="column_uneven_2_6_3_left hide-if-mobile">
      <div className="section">
        <h2>Find out more</h2>
        <div>
          <a href="https://www.linkedin.com/in/fanzengau/"><img src={iconResized['icon_linkedin.png']}
            height="48" width="48" alt="LinkedIn" /></a>
          <a href="https://github.com/fanzeng"><img src={iconResized['icon_github.png']} height="48"
            width="48" alt="Github" /></a>
          <a href="https://www.freecodecamp.org/fanzeng"><img src={iconResized['icon_freecodecamp.png']}
            height="48" width="48" alt="FreeCodeCamp" /></a>
          <a href="https://www.hackerrank.com/fanzeng"><img src={iconResized['icon_hackerrank.png']}
            height="48" width="48" alt="HankerRank" /></a>
          <a href="https://stackoverflow.com/users/7382314/fan-zeng"><img
            src={iconResized['icon_stackoverflow.png']} height="48" width="48" alt="stackoverflow" /></a>
        </div>

      </div>
    </div>
  </>
}