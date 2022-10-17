import { useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  elementName: string;
  children: React.ReactNode;
};

export const Portal = (props: Props) => {
  const element = document.createElement("div");
  const elemntToFix = document.getElementById(props.elementName);

  useEffect(() => {
    if (elemntToFix) {
      elemntToFix.appendChild(element);
    }
    return () => {
      elemntToFix?.removeChild(element);
    };
  }, [elemntToFix]);

  if (!elemntToFix) {
    return null;
  }

  return ReactDOM.createPortal(props.children, element);
};
