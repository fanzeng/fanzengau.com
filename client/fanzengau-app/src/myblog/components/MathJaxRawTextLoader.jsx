import { useState, useEffect } from "react";

export function MathJaxRawTextLoader({ file, className }) {
  const [content, setContent] = useState("Loading");

  useEffect(() => {
    // Fetch the raw text file
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });
  }, [file]);

  useEffect(() => {
    // Render MathJax after content is updated
    const nodes = document.getElementsByClassName(className);
    if (nodes.length > 0) {
      window.MathJax.typesetClear([...nodes]);
      window.MathJax.typesetPromise([...nodes]);
    }
  }, [content, className]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}