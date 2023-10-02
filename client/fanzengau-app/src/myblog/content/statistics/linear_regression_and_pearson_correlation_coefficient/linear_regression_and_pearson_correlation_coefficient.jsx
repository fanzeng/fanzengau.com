import { useState } from "react";
import raw from './linear_regression_and_pearson_correlation_coefficient.txt';

export function LinearRegressionAndPearsonCorrelationCoefficient() {
  let [data, setData] = useState('Loading');
  fetch(raw)
    .then(r => r.text())
    .then(text => {
      setData(text);
    });
  return <>
    <div dangerouslySetInnerHTML={{ __html: data }}></div>
  </>
}