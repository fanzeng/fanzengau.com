import { useState, useEffect } from "react";
import solutionDotJavaFile from './code/Solution.java';
import runMeDotShFile from './code/run_me.sh';
import runMeDotTxtFile from './code/run_me.txt';

export default function CodeSnippet() {
  const fetchFileAndSetState = (file, setStateFn) => {
    return () => {
      fetch(file)
        .then(r => r.text())
        .then(r => {
          console.log('r=', r)
          r = r.replace(/[\r?\n]/g, '<br>');
          r = r.replace(/[ ]/g, '&nbsp;');
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
  useEffect(function() {
    const intv = setInterval(() => {
      if (window?.PR?.prettyPrint && typeof window.PR.prettyPrint === 'function') {
        if (solutionDotJava !== 'Loading' && runMeDotSh !== 'Loading' && runMeDotTxt !== 'Loading') {
          window.PR.prettyPrint();
          clearInterval(intv);
        }
      }
    }, 50);
  }, [solutionDotJava, runMeDotSh, runMeDotTxt]);
  return <>
    <div className="section">
      <p>Code example in Java:</p>
      <div>
        <p>Solution.java</p>
        <code className="prettyprint">
          <div dangerouslySetInnerHTML={{ __html: solutionDotJava }} />
        </code>
      </div>
      <div>
        <p>run_me.sh</p>
        <code className="prettyprint">
          <div dangerouslySetInnerHTML={{ __html: runMeDotSh }} />
        </code>
      </div>
      <div>
        <p>run_me.txt</p>
        <code className="prettyprint">
          <div dangerouslySetInnerHTML={{ __html: runMeDotTxt }} />
        </code>
      </div>
    </div>
  </>
}