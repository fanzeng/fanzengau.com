import { useState, useEffect } from "react";
import { MathJax } from "../../../math-jax/MathJax";
import raw from './gradient_of_categorical_cross_entropy.txt';

export function GradientOfCategoricalCrossEntropy() {
  let [data, setData] = useState('Loading');
  let [renderMathJax, setRenderMathJax] = useState(false);

  useEffect(() => {
    setRenderMathJax(true);
  }, [data]);

  fetch(raw)
    .then(r => r.text())
    .then(text => {
      setData(text);
    });
  return <>
    <div dangerouslySetInnerHTML={{ __html: data }}></div>
    {renderMathJax && <MathJax />}
  </>
}