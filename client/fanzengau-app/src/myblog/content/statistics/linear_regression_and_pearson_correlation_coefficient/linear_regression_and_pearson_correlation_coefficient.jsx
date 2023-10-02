import { useState, useEffect } from "react";
import { MathJax } from "../../../math-jax/MathJax";
import raw from './linear_regression_and_pearson_correlation_coefficient.txt';

export function LinearRegressionAndPearsonCorrelationCoefficient() {
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