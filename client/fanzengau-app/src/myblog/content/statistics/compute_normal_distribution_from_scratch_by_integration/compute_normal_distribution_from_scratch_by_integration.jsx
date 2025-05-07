import { MathJaxRawTextLoader } from "../../../components/MathJaxRawTextLoader";
import CodeSnippet from "./CodeSnippet";
import raw1 from './compute_normal_distribution_from_scratch_by_integration_1.txt';
import raw2 from './compute_normal_distribution_from_scratch_by_integration_2.txt';

export default function ComputeNormalDistributionFromScratchByIntegration() {
  return (
    <>
      <MathJaxRawTextLoader file={raw1} className="data" />
      <CodeSnippet />
      <MathJaxRawTextLoader file={raw2} className="data" />
    </>
  );
}