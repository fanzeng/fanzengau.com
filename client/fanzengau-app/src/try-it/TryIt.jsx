import { useState } from "react";

export function TryIt({ children, btnText }) {
  const [showTryItContent, setShowTryItContent] = useState(false);
  return <>
    <br />
    <span className="moreinfo_span_outer" onMouseEnter={() => setShowTryItContent(true)}>
      <span className="moreinfo_span_inner">
        {btnText ?? 'Try it'}
      </span>
    </span>
    {
      showTryItContent ? children : null
    }
  </>
}