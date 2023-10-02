import { useState, useEffect } from "react";
import { GoogleCodePrettify } from "../../../google-code-pretiffy/GoogleCodePrettify";
import solutionDotJavaFile from './code/Solution.java';
import runMeDotShFile from './code/run_me.sh';
import runMeDotTxtFile from './code/run_me.txt';

export function CodeSnippet() {
  const fetchFileAndSetState = (file, setStateFn) => {
    return () => {
      fetch(file)
        .then(r => r.text())
        .then(r => {
          r = r.replace(/[\r?\n]/g, '<br>');
          setStateFn(r);
        });
    }
  }
  let [solutionDotJava, setSolutionDotJava] = useState('Loading');
  let [runMeDotSh, setrunMeDotSh] = useState('Loading');
  let [runMeDotTxt, setrunMeDotTxt] = useState('Loading');

  useEffect(fetchFileAndSetState(solutionDotJavaFile, setSolutionDotJava), []);
  useEffect(fetchFileAndSetState(runMeDotShFile, setrunMeDotSh), []);
  useEffect(fetchFileAndSetState(runMeDotTxtFile, setrunMeDotTxt), []);
  return <>
    <div className="section">
      <p>Code example in Java:</p>
      <div>
        <p>Solution.java</p>
        <code className="prettyprint linenums">
          <div dangerouslySetInnerHTML={{ __html: solutionDotJava }} />
        </code>
      </div>
      <div>
        <p>run_me.sh</p>
        <code className="prettyprint linenums">
          <div dangerouslySetInnerHTML={{ __html: runMeDotSh }} />
        </code>
      </div>
      <div>
        <p>run_me.txt</p>
        <code className="prettyprint linenums">
          <div dangerouslySetInnerHTML={{ __html: runMeDotTxt }} />
        </code>
      </div>
    </div>
  </>
}