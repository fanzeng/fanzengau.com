import { MathJax } from "better-react-mathjax";

export function GradientOfCategoricalCrossEntropy() {
  return <>
<title> 
  Gradient of Categorical Cross Entropy  
</title>
<header class="section">
  <h1> 
    Gradient of Categorical Cross Entropy
  </h1>
</header>
<div class="section">
  <h3>Categorical cross entropy</h3>
    <MathJax hideUntilTypeset={"first"}>{`
      For catogorical classification, cross entropy loss contributed by training data point \\(i\\),
        \\((\\mathbf{x}_{i}, y_{i})\\),
      is simply the "negative log likelihood (NLL)":
      $$
        L_{i} = -log(p_{y_{i}}) \\quad ,
      $$
      since the ground truth probability is one for the correct label \\(y_{i}\\) and zero for every other label.
     `}</MathJax>
</div>
<div class="section">
  <h3>Softmax probability</h3>
    <MathJax hideUntilTypeset={"first"}>{`
      For each candidate class \\(k\\), the softmax probability is given by 
      $$
        p_{k} = \\frac{e^{f_{k}}}{\\Sigma_{j}e^{f_{j}}}
      $$
     `}</MathJax>
    <MathJax hideUntilTypeset={"first"}>{`
      where \\(f\\) is (the collection of) our network's mapping function(s) that 
      maps input \\(x\\) to (each class label in) the output layer.
      \\(f_{k}\\) is the function that maps \\(x\\) to class \\(k\\). The dummy index \\(j\\) in the above equation is used to sum up the probability over all candidate classes,
      normalizing \\(p_{k}\\).
      We don't need to care too much about \\(j\\), the indices that is meaningful here is 
      \\(i\\), the training data point index, 
      and \\(k\\), the candidate class under consideration, we would hope it is reported by our network to be equal to 
      the ground truth label of this data point, \\(y_{i}\\).
     `}</MathJax>
</div>
<div class="section">
  <h3>Gradient of the cross entropy loss</h3>
  <MathJax hideUntilTypeset={"first"}>{`
    Next we show the partial derivative of the cross entropy loss function defined above 
    w.r.t each of the mapping function \\(f_{k}\\) is given by the following expression:
    $$
      \\frac{\\partial L_{i}}{\\partial f_{k}} = \\left\\{
        \\begin{array}{ll}
            p_{k} - 1 & \\quad k = y_{i} \\\\
            p_{k} & \\quad k \\neq y_{i}
        \\end{array}
      \\right.
    $$
   `}</MathJax>
  <MathJax hideUntilTypeset={"first"}>{`
    Plugging in the expression of \\(p_{y_{i}}\\) into \\(L_{i}\\):
    $$
      \\frac{\\partial L_{i}}{\\partial f_{k}}
      = -\\frac{\\partial}{\\partial f_{k}} log(\\frac{e^{f_{y_{i}}}}{\\Sigma_{j}e^{f_{j}}}) \\\\
      = -\\frac{\\Sigma_{j}e^{f_{j}}}{e^{f_{y_{i}}}}
        \\frac{\\partial}{\\partial f_{k}} \\frac{e^{f_{y_{i}}}}{\\Sigma_{j}e^{f_{j}}}
    $$
   `}</MathJax>
  <MathJax hideUntilTypeset={"first"}>{`
    The key here is to recognize that when \\(j \\neq k\\), 
    the partial derivative of\\(f_{j}\\) w.r.t \\(f_{k}\\) is 0. We can view these functions are separate functions
    provided by the network for each class, they don't compose each other. Thus,
    when \\(k = y_{i}\\),
    $$
      \\frac{\\partial}{\\partial f_{k}} \\frac{e^{f_{y_{i}}}}{\\Sigma_{j}e^{f_{j}}} \\\\
      = \\frac{\\partial}{\\partial f_{k}} \\frac{e^{f_{k}}}{\\Sigma_{j}e^{f_{j}}} \\\\

      = \\frac{1}{(\\Sigma_{j}e^{f_{j}})^{2}}(e^{f_{k}}\\Sigma_{j}e^{f_{j}} - e^{f_{k}}e^{f_{k}})
    $$
    the only part of the summation that contributes to the partial derivative is the part when \\(j=k\\).
   `}</MathJax>
  <MathJax hideUntilTypeset={"first"}>{`
    When \\(k \\neq y_{i}\\),
    $$
      \\frac{\\partial}{\\partial f_{k}} \\frac{e^{f_{y_{i}}}}{\\Sigma_{j}e^{f_{j}}} \\\\
      = \\frac{1}{(\\Sigma_{j}e^{f_{j}})^{2}}(0 - e^{f_{y_{i}}}e^{f_{k}})
    $$
    The 1st term is 0 since \\(y_{i} \\neq k\\).
    For the 2nd term, the only part of the summation that contributes to the partial derivative is the part when \\(j=k\\).
   `}</MathJax>
  <MathJax hideUntilTypeset={"first"}>{`
    Plugging back into the expression of \\(\\frac{\\partial L_{i}}{\\partial f_{k}}\\): When \\(k = y_{i}\\),
    $$
      \\frac{\\partial L_{i}}{\\partial f_{k}} 
      = -\\frac{\\Sigma_{j}e^{f_{j}}}{e^{f_{y_{i}}}}
        \\frac{1}{(\\Sigma_{j}e^{f_{j}})^{2}}(e^{f_{k}}\\Sigma_{j}e^{f_{j}} - e^{2f_{k}}) \\\\
      = - \\frac{1}{(\\Sigma_{j}e^{f_{j}})}(\\Sigma_{j}e^{f_{j}} - e^{f_{k}}) \\\\
      = - \\frac{1}{(\\Sigma_{j}e^{f_{j}})}(\\Sigma_{j}e^{f_{j}} - e^{f_{y_{i}}}) \\\\
      = \\frac{1}{(\\Sigma_{j}e^{f_{j}})}(e^{f_{y_{i}} - \\Sigma_{j}e^{f_{j}}}) \\\\
      = p_{k} - 1 
    $$
   `}</MathJax>
  <MathJax hideUntilTypeset={"first"}>{`
    And when \\(k \\neq y_{i}\\),
    $$
      \\frac{\\partial L_{i}}{\\partial f_{k}} 
      = -\\frac{\\Sigma_{j}e^{f_{j}}}{e^{f_{y_{i}}}}
        \\frac{1}{(\\Sigma_{j}e^{f_{j}})^{2}}( - e^{f_{y_{i}}}e^{f_{k}}) \\\\
      = \\frac{e^{f_{k}}}{\\Sigma_{j}e^{f_{j}}} \\\\
      = p_{k}
    $$
   `}</MathJax>
</div>

<div class="section">
  <h3>
    Intuitive understanding
  </h3>
  <MathJax hideUntilTypeset={"first"}>{`
    The intuitive interpretation of the above result is straightforward:
    If \\(k = y_{i}\\) we would like the softmax probability to be 1,
    whatever is missing from 1, i.e., \\(p_{k}\\ - 1\\), is the loss 
    (negative because we would like \\(p_{k}\\) to increase). 
    If \\(k \\neq y_{i}\\), we would like the softmax probability to be 0, 
    whatever distance from 1, i.e., \\(p_{k}\\) itself, is the loss. 
   `}</MathJax>
</div>
</>
      }