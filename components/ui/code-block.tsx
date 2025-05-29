"use client";

import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  value: string;
  className?: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ value, className }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dark}
      showLineNumbers={true}
    >
      {value}
    </SyntaxHighlighter>
  );
};
