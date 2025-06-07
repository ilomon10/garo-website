import type React from "react";
import { Settings, FileText, Code2 } from "lucide-react";

const DiagramNode = ({
  icon: Icon,
  children,
  className,
}: {
  icon?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex items-center justify-center bg-[#2A2A2A] rounded-lg p-2 ${className}`}
  >
    {Icon && <Icon className="h-5 w-5 text-gray-400 mr-2" />}
    <div className="text-xs text-gray-300">{children}</div>
  </div>
);

const IconNode = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="bg-[#2A2A2A] rounded-full p-2 inline-flex">
    <Icon className="h-5 w-5" />
  </div>
);

const DottedLine = () => (
  <div
    className="h-6 w-px bg-repeat-y bg-[length:1px_4px]"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #4A4A4A 50%, transparent 50%)",
    }}
  />
);

export default function MockPowerfulApiDiagram() {
  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <IconNode icon={Settings} />
      <DottedLine />
      <DiagramNode icon={FileText}>
        <div>
          <p className="text-gray-300">Contract.pdf</p>
          <p className="text-gray-500 text-[10px]">Timur Ercan</p>
        </div>
      </DiagramNode>
      <DottedLine />
      <IconNode icon={Code2} />
      <DottedLine />
      <div className="bg-[#2A2A2A] p-2 rounded-lg text-[10px] text-gray-400">
        <pre>
          <code>
            {"{"}
            <br />
            {'  "title": "my-document.pdf",'}
            <br />
            {'  "recipients": { "name": "Alex Blake" }'}
            <br />
            {"}"}
          </code>
        </pre>
      </div>
    </div>
  );
}
