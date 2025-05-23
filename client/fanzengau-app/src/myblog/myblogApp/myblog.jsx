import { Link } from 'react-router-dom';
import './myblog.css';

export function Myblog() {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const importBlogs = (requireContext) => {
    const blogs = requireContext.keys().map((key) => {
      const pathParts = key.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const title = capitalizeFirstLetter(fileName.replace(/_/g, ' ').replace('.jsx', ''));
      const url = `/myblog/content${key.replace('./', '').replace('.jsx', '')}`;
      return { title, url, pathParts };
    });

    const nestedBlogs = {};
    blogs.forEach(({ title, url, pathParts }) => {
      let currentLevel = nestedBlogs;
      const dirName = pathParts[pathParts.length - 2];
      const fileNameWithoutExtension = pathParts[pathParts.length - 1].replace('.jsx', '');

      pathParts.slice(1, -1).forEach((part, index) => {
        if (!currentLevel[part]) currentLevel[part] = {};
        currentLevel = currentLevel[part];

        if (index === pathParts.length - 3 && part === fileNameWithoutExtension) {
          currentLevel.title = capitalizeFirstLetter(dirName.replace(/_/g, ' '));
          currentLevel.url = url;
        }
      });

      if (dirName !== fileNameWithoutExtension) {
        currentLevel[pathParts[pathParts.length - 1]] = { title, url };
      }
    });

    return nestedBlogs;
  };

  const blogs = importBlogs(
    require.context('../content', true, /\.jsx$/)
  );

  const renderNestedBlogs = (nestedBlogs) => {
    return (
      <ul className="blogList">
        {Object.entries(nestedBlogs).map(([key, value]) => {
          if (value.url) {
            return (
              <li key={value.url} className="blogItem">
                <Link to={value.url} className="blogLink">
                  {value.title}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={key} className="blogCategory">
                <strong>{capitalizeFirstLetter(key.replace(/_/g, ' '))}</strong>
                {renderNestedBlogs(value)}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return <div className="main_content">
    <div className="section">
        {renderNestedBlogs(blogs)}
      </div>
    </div>;
}