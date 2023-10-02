import { useState } from "react";
import raw from './gradient_of_categorical_cross_entropy.txt';

export function GradientOfCategoricalCrossEntropy() {
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