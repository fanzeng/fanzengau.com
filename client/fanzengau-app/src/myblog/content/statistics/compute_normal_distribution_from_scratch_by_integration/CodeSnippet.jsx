import { CodeBlock } from "../../../components/CodeBlock";
import { PrettyPrintWrapper } from "../../../components/PrettyPrintWrapper";
import solutionDotJavaFile from "./code/Solution.java";
import runMeDotShFile from "./code/run_me.sh";
import runMeDotTxtFile from "./code/run_me.txt";

export default function CodeSnippet() {
  return (
    <div className="section">
      <p>Code example in Java:</p>
      <PrettyPrintWrapper>
        <CodeBlock file={solutionDotJavaFile} title="Solution.java" />
        <CodeBlock file={runMeDotShFile} title="run_me.sh" />
        <CodeBlock file={runMeDotTxtFile} title="run_me.txt" />
      </PrettyPrintWrapper>
    </div>
  );
}