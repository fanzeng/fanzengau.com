import { useState, useEffect } from "react";

export function CodeBlock({ file, title }) {
  const [content, setContent] = useState("Loading");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        text = text.replace(/[\r?\n]/g, "<br>").replace(/[ ]/g, "&nbsp;");
        setContent(text);
        setIsLoaded(true); // Mark this CodeBlock as loaded
      });
  }, [file]);

  useEffect(() => {
    if (isLoaded) {
      const intv = setInterval(() => {
        if (window?.PR?.prettyPrint && typeof window.PR.prettyPrint === "function") {
          window.PR.prettyPrint();
          clearInterval(intv);
        }
      }, 50);

      return () => clearInterval(intv); // Cleanup interval on unmount
    }
  }, [isLoaded]);

  return (
    <div className="code_block">
      <p>{title}</p>
      <code className="prettyprint">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </code>
    </div>
  );
}