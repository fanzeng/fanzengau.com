import { useState, useEffect } from "react";

export function MathJaxRawTextLoader({ file, className }) {
  const [content, setContent] = useState("Loading");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      });
  }, [file]);

  useEffect(() => {
    const renderMathJax = () => {
      if (window?.MathJax?.typesetClear && window.MathJax.typesetPromise) {
        const nodes = document.getElementsByClassName(className);
        if (nodes.length > 0) {
          window.MathJax.typesetClear([...nodes]);
          window.MathJax.typesetPromise([...nodes]);
        }
      } else {
        console.warn("MathJax is not loaded yet.");
      }
    };

    const interval = setInterval(() => {
      if (window?.MathJax) {
        renderMathJax();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [content, className]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}