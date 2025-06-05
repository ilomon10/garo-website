"use client";

import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  highlighStyle?: { [key: string]: React.CSSProperties };
}

export const CodeBlock: FC<CodeBlockProps> = ({
  value,
  className,
  style,
  highlighStyle,
}) => {
  return (
    <div className={className} style={style}>
      <SyntaxHighlighter
        language="javascript"
        style={{
          ...dark,
          hljs: {
            backgroundColor: "transparent",
            padding: 0,
          },
          ...highlighStyle,
        }}
        showLineNumbers={true}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};
