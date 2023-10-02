import { useState, useEffect } from "react";
import { GoogleCodePrettify } from "../../../google-code-pretiffy/GoogleCodePrettify";
import { MathJax } from "../../../math-jax/MathJax";
import raw1 from './compute_normal_distribution_from_scratch_by_integration_1.txt';
import { CodeSnippet } from "./CodeSnippet";
import raw2 from './compute_normal_distribution_from_scratch_by_integration_2.txt';

export function ComputeNormalDistributionFromScratchByIntegration() {
  let [data1, setData1] = useState('Loading');
  let [data2, setData2] = useState('Loading');
  let [renderMathJax, setRenderMathJax] = useState(false);

  useEffect(() => {
    setRenderMathJax(true);
  }, [data1, data2]);

  fetch(raw1)
    .then(r => r.text())
    .then(text => {
      setData1(text);
    });
    fetch(raw2)
    .then(r => r.text())
    .then(text => {
      setData2(text);
    });
  return <>
    <GoogleCodePrettify />

    <div dangerouslySetInnerHTML={{ __html: data1 }}></div>
    <CodeSnippet/>
    <div dangerouslySetInnerHTML={{ __html: data2 }}></div>
    {renderMathJax && <MathJax />}
  </>
}