import { useState, useEffect } from "react";

export function CodeBlock({ file, title }) {
  const [content, setContent] = useState("Loading");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        text = text.replace(/[\r?\n]/g, "<br>").replace(/[ ]/g, "&nbsp;");
        setContent(text);
      });
  }, [file]);

  useEffect(() => {
    const intv = setInterval(() => {
      if (window?.PR?.prettyPrint && typeof window.PR.prettyPrint === "function") {
        if (content !== "Loading") {
          window.PR.prettyPrint();
          clearInterval(intv);
        }
      }
    }, 50);

    return () => clearInterval(intv); // Cleanup interval on unmount
  }, [content]);

  return (
    <div className="code_block">
      <p>{title}</p>
      <code className="prettyprint">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </code>
    </div>
  );
}