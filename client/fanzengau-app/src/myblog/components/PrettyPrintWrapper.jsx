import { useState, useEffect } from "react";
import React from "react";

export function PrettyPrintWrapper({ children }) {
  const [loadedBlocks, setLoadedBlocks] = useState(0);
  const totalBlocks = React.Children.count(children);

  const handleBlockLoaded = () => {
    console.log('block loaded.')
    setLoadedBlocks((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedBlocks === totalBlocks && totalBlocks > 0) {
      if (window?.PR?.prettyPrint && typeof window.PR.prettyPrint === "function") {
        console.log('prettyprinting.')
        window.PR.prettyPrint();
      }
    }
  }, [loadedBlocks, totalBlocks]);

  // Properly clone children and pass the `setIsLoaded` prop
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props, // Preserve existing props
        setIsLoaded: handleBlockLoaded, // Add setIsLoaded prop
      });
    }
    return child;
  });

  return <div className="prettyprint-wrapper">{childrenWithProps}</div>;
}