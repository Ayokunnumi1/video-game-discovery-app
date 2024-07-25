import { useState } from "react";

interface Props {
  children: React.ReactNode;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <>
      <p>
        {text}...
              <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 bg-neutral-950 text-white rounded-md">{isExpanded ? "less" : "More" }</button>
      </p>
    </>
  );
};

export default ExpandableText;
