import { Link } from 'react-router-dom';

export function Myblog() {
  // Dynamically import all JSX files from the myblog/content directory
  const importBlogs = (requireContext) => {
    const blogs = requireContext.keys().map((key) => {
      const pathParts = key.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const title = fileName.replace(/_/g, ' ').replace('.jsx', ''); // Format title
      const url = `/myblog/content${key.replace('./', '').replace('.jsx', '')}`; // Generate URL
      return { title, url, pathParts };
    });

    // Organize blogs into a nested structure
    const nestedBlogs = {};
    blogs.forEach(({ title, url, pathParts }) => {
      let currentLevel = nestedBlogs;
      pathParts.slice(1, -1).forEach((part) => {
        if (!currentLevel[part]) currentLevel[part] = {};
        currentLevel = currentLevel[part];
      });
      currentLevel[pathParts[pathParts.length - 1]] = { title, url };
    });

    return nestedBlogs;
  };

  const blogs = importBlogs(
    require.context('../content', true, /\.jsx$/) // Only include JSX files
  );

  // Recursive function to render the nested structure
  const renderNestedBlogs = (nestedBlogs) => {
    return (
      <ul>
        {Object.entries(nestedBlogs).map(([key, value]) => {
          if (value.url) {
            // Leaf node (blog file)
            return (
              <li key={value.url}>
                <Link to={value.url}>{value.title}</Link>
              </li>
            );
          } else {
            // Directory (nested blogs)
            return (
              <li style={{fontSize: 15}} key={key}>
                <strong>{key.replace(/_/g, ' ')}</strong>
                {renderNestedBlogs(value)}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return <div style={{ margin: '5px' }}>{renderNestedBlogs(blogs)}</div>;
}