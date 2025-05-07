import { MathJaxRawTextLoader } from "../../../components/MathJaxRawTextLoader";
import raw from './linear_regression_and_pearson_correlation_coefficient.txt';

export default function LinearRegressionAndPearsonCorrelationCoefficient() {
  return (
    <>
      <MathJaxRawTextLoader file={raw} className="data" />
    </>
  );
}