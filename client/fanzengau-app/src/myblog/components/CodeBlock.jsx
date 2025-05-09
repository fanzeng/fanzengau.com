import { useState, useEffect } from "react";

export function CodeBlock({ file, title, setIsLoaded }) {
  const [content, setContent] = useState("Loading");

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts

    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        if (isMounted) {
          text = text.replace(/[\r?\n]/g, "<br>").replace(/[ ]/g, "&nbsp;");
          setContent(text);
          if (setIsLoaded) {
            console.log(`CodeBlock for ${title} loaded`);
            setIsLoaded();
          }
        }
      })
      .catch((error) => {
        console.error(`Failed to load file: ${file}`, error);
      });

    return () => {
      isMounted = false;
    };
  }, [file, title]);

  return (
    <div className="code_block">
      <p>{title}</p>
      <code className="prettyprint">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </code>
    </div>
  );
}