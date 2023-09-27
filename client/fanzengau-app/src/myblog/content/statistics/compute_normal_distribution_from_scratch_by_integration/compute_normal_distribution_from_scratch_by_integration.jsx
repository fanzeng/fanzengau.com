import { MathJax } from "better-react-mathjax";

export function ComputeNormalDistributionFromScratchByIntegration() {
  return <>
    <title>
      Compute Normal Distrubution from Scratch by Integration
    </title>
    <header class="section">
      <h1>
        Compute Normal Distrubution from Scratch by Integration
      </h1>
    </header>
    <div class="section">
      <h3>Cumulative distribution function</h3>
      <MathJax hideUntilTypeset={"first"}>{`
      The normal distribution cumulative distribution function (cdf): 
      $$ \\Phi(x) = \\frac{1}{2}(1+erf(\\frac{x-\\mu}{\\sigma\\sqrt{2}})) $$
      where \\(erf(\\cdot)\\) is the error function: 
      $$ erf(z) = \\frac{2}{\\sqrt{\\pi}}\\int_{0}^{z}e^{-x^2}dx $$
  `}</MathJax>
      <MathJax hideUntilTypeset={"first"}>{`
    \\(\\Phi(x)\\) is the cumulative probablity of the normal-distributed random variable being less than \\(x\\), to calculate such value for a given \\(x\\), we need to evaluate the error function \\(erf(x)\\) for that \\(x\\), which can be performed using numercial integration.
  `}</MathJax>
    </div>
    <div class="section">
      <p>Code example in Java:</p>
      <div>
        <p>Solution.java</p>
        <iframe onload='embedText(this, "data/code/Solution.java")'></iframe>
      </div>
      <div>
        <p>run_me.sh</p>
        <iframe onload='embedText(this, "data/code/run_me.sh")'></iframe>
      </div>
      <div>
        <p>run_me.txt</p>
        <iframe onload='embedText(this, "data/code/run_me.txt")'></iframe>
      </div>
    </div>
    <div class="section">
      <h3>The quantile function</h3>
      <MathJax hideUntilTypeset={"first"}>{`
  The inverse of the cumulative distribution function, \\(F(\\cdot)=\\Phi^{-1}(\\cdot)\\), is called the `}</MathJax><em>quantile function</em>, which is useful in <em>hypothesis testing</em> and <em>confidence interval</em> calculations. We can simply solve for <MathJax hideUntilTypeset={"first"}>{`\\(x\\) using the expression of , to obtain the inverse function $$ F(p)=\\sqrt{2}\\sigma \\cdot erf^{-1}(2p-1)+\\mu $$
  By definition, \\(F(p)\\) is value for which there is \\(p\\) chance that the random variable takes a value below it.
`}</MathJax>
      <MathJax hideUntilTypeset={"first"}>{`
  It follows that the probability that the random varible takes a value above \\(F(p)\\) is \\(1-p\\). By symmetry of the normal distribution probability distribution function, the probability that the random varible takes a value below \\(\\mu-F(p)\\) is also \\(1-p\\).
`}</MathJax>
      <MathJax hideUntilTypeset={"first"}>{`
  The \\(F(p)\\) for a standard normal distribution is often denoted as \\(z_{p}\\), since we know the mean and standard deviation for such a distribution is 0 and 1, we can plug them in and get $$ z_{p}(p)=\\sqrt{2}\\cdot erf^{-1}(2p-1) $$
`}</MathJax>
      <MathJax hideUntilTypeset={"first"}>{`
  Now there is only one independent variable in \\(z_{p}\\), and we know it ranges from \\([0, 1]\\), so a plot can be generated by plugging in every value from 0 to 1 to the equation above.
`}</MathJax>
    </div>

  </>
}