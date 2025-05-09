import { MathJax } from "../../../math-jax/MathJax";
import { MathJaxRawTextLoader } from "../../../components/MathJaxRawTextLoader";
import raw from './gradient_of_categorical_cross_entropy.txt';

export default function GradientOfCategoricalCrossEntropy() {
  return (
    <>
      <MathJaxRawTextLoader file={raw} className="data" />
    </>
  );
}