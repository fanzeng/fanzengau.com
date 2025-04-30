import { useState, useEffect } from "react";
import { MathJax } from "../../../math-jax/MathJax";
import raw from './linear_regression_and_pearson_correlation_coefficient.txt';

export default function LinearRegressionAndPearsonCorrelationCoefficient() {
  let [data, setData] = useState('Loading');

  useEffect(() => {
    setTimeout(() => {
      const nodes = document.getElementsByClassName('data');
      if (Array.isArray(nodes)) {
        nodes.forEach(node => {
          window.MathJax.typesetClear([node]);
          window.MathJax.typesetPromise([node]);
        });
      } else {
        window.MathJax.typesetClear([nodes]);
        window.MathJax.typesetPromise([nodes]);
      }
    }, 30);
  }, [data]);

  fetch(raw)
    .then(r => r.text())
    .then(text => {
      setData(text);
    });
  return <>
  <MathJax/>
    <div className="data" dangerouslySetInnerHTML={{__html: data}} />
  </>
}