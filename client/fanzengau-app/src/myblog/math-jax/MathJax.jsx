import { useEffect } from "react";

export function MathJax() {
  // Special syntaxes:
  // $$blah blah$$
  //   MathJax for latex math formulae.
  // \(blah blah\)
  //   Mathjax for latex inline math expressions.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
    script.async = true;
    document.body.appendChild(script);
    console.log('MathJax rendered.')
    return () => {
      document.body.removeChild(script);
    }
  }, []);
}