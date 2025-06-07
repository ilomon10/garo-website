import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Copy, FileText, Settings, Users } from "lucide-react"; // Added FileJson2 for OpenAPI
import MockPowerfulApiDiagram from "./api-feature-powerful-api";
import { Button } from "@/components/ui/button";

const FeatureCard = ({
  title,
  description,
  tag,
  children,
  className,
  cardHeaderProps,
  cardContentProps,
}: {
  icon?: React.ElementType;
  title: string;
  description: string;
  tag: string;
  children?: React.ReactNode;
  className?: string;
  cardHeaderProps?: React.ComponentProps<"div">;
  cardContentProps?: React.ComponentProps<"div">;
}) => (
  <Card
    className={`bg-[#1E1E1E] border-[#2A2A2A] text-white flex flex-col ${className}`}
  >
    <CardHeader
      {...cardHeaderProps}
      className={`text-center items-center ${cardHeaderProps?.className}`}
    >
      <p className="text-sm font-bold mb-1">{tag}</p>
      <CardTitle className="mb-1 text-2xl font-semibold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className={`flex-grow ${cardContentProps?.className}`}>
      {children}
    </CardContent>
  </Card>
);

const MockApiReference = () => (
  <div className="bg-[#111111] p-3 rounded-md text-xs text-gray-500 space-y-2">
    <p className="text-gray-300 font-medium">API Reference</p>
    <div className="h-2 w-3/4 bg-gray-700 rounded"></div>
    <div className="h-2 w-1/2 bg-gray-700 rounded"></div>
    <p className="text-gray-300 font-medium mt-2">Upload a Document</p>
    <div className="h-2 w-full bg-gray-700 rounded"></div>
    <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
    <Button className="mt-1 w-full" size={"sm"}>
      Creating a document...
    </Button>
  </div>
);

const MockApiToken = () => (
  <div className="bg-[#111111] p-3 rounded-md text-xs text-gray-500 space-y-2">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Code2 className="h-3 w-3 text-gray-400" />
        <span className="text-gray-300">Acme_documents</span>
      </div>
      <span className="text-gray-500 text-[10px]">No expiry</span>
    </div>
    <div className="flex justify-between items-center bg-[#2A2A2A] p-1.5 rounded">
      <span className="text-gray-400 truncate">api_td8zpk8bpnyzb8j5...</span>
      <Copy className="h-3 w-3 text-gray-400 cursor-pointer" />
    </div>
    <p className=" text-[10px] text-center pt-1">API key copied!</p>
  </div>
);

const MockWorkflowDiagram = () => (
  <div className="relative h-40 flex items-center justify-center">
    {/* Simplified representation */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#2A2A2A] px-2 py-1 rounded text-xs text-gray-400">
      Signing order
    </div>
    <Settings className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-4 left-1/4 -translate-x-1/2 bg-[#2A2A2A] px-2 py-1 rounded text-xs text-gray-400">
      Advanced fields
    </div>
    <div className="absolute bottom-4 right-1/4 translate-x-1/2 bg-[#2A2A2A] px-2 py-1 rounded text-xs text-gray-400">
      Permission
    </div>
    <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#2A2A2A] px-2 py-1 rounded text-xs text-gray-400">
      Redirect
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45">
      <FileText className="h-6 w-6 text-gray-600" />
    </div>
  </div>
);

const MockCodeSnippet = () => (
  <pre className="bg-[#111111] p-3 rounded-md text-[10px] text-gray-400 overflow-x-auto">
    <code>
      <span className="text-purple-400">{`"directLink"`}</span>:{" "}
      <span className="text-blue-400">{`"..."`}</span>,
      <br />
      <span className="text-purple-400">{`"fields"`}</span>: [
      <br />
      {"  "}
      {"{"}
      <br />
      {"    "}
      <span className="text-purple-400">{`"id"`}</span>:{" "}
      <span className="text-green-400">0</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"recipientId"`}</span>:{" "}
      <span className="text-green-400">0</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"type"`}</span>:{" "}
      <span className="text-blue-400">{`"SIGNATURE"`}</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"page"`}</span>:{" "}
      <span className="text-green-400">0</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"positionX"`}</span>:{" "}
      <span className="text-blue-400">{`"string"`}</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"positionY"`}</span>:{" "}
      <span className="text-blue-400">{`"string"`}</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"width"`}</span>:{" "}
      <span className="text-blue-400">{`"string"`}</span>,
      <br />
      {"    "}
      <span className="text-purple-400">{`"height"`}</span>:{" "}
      <span className="text-blue-400">{`"string"`}</span>
      <br />
      {"  "}
      {"}"}
      <br />
      ],
      <br />
      <span className="text-purple-400">{`"recipient"`}</span>: [ ... ]
    </code>
  </pre>
);

const MockUserTeamDiagram = () => (
  <div className="relative h-32 flex items-center justify-center space-x-8">
    <div className="text-center">
      <div className="bg-[#2A2A2A] p-2 rounded-full inline-block mb-1">
        <FileText className="h-5 w-5 text-gray-400" />
      </div>
      <p className="text-xs text-gray-500">Personal</p>
    </div>
    <Users className="h-6 w-6" />
    <div className="text-center">
      <div className="grid grid-cols-2 gap-1">
        {["TR", "IN", "LS", "CD"].map((label) => (
          <div
            key={label}
            className="bg-[#2A2A2A] p-1.5 rounded-full text-xs text-gray-400 w-6 h-6 flex items-center justify-center"
          >
            {label}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-1">Team</p>
    </div>
  </div>
);

export default function ApiFeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-[1024px] px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            tag="DOCUMENTATION"
            title="Simple API Documentation"
            description="Our straightforward documentation makes implementation a breeze."
          >
            <MockApiReference />
          </FeatureCard>
          <FeatureCard
            tag="API TOKENS"
            title="Create API Tokens With Ease"
            description="Generate and manage secure API tokens in just a few clicks from the dashboard."
          >
            <MockApiToken />
          </FeatureCard>
          <FeatureCard
            tag="POWERFUL API"
            title="What you see is what you get."
            description="Anything visible in the UI is accessible through the API—effortlessly orchestrate complex workflows like magic."
            className="lg:col-span-2 flex-row-reverse"
            cardHeaderProps={{
              className:
                "flex flex-col grow w-1/2 justify-center items-stretch text-left",
            }}
            cardContentProps={{
              className: "grow w-1/2",
            }}
          >
            <MockPowerfulApiDiagram />
          </FeatureCard>
          <FeatureCard
            tag="CUSTOMIZE"
            title="Customize the Lifecycle"
            description="Tailor every step of your document workflow to match your exact business processes and requirements."
            className="lg:row-span-2"
          >
            <MockWorkflowDiagram />
          </FeatureCard>
          <FeatureCard
            tag="OPENAPI SUPPORT"
            title="Generate Your API Client"
            description="Generate client libraries in your preferred programming language using our standardized OpenAPI specification."
            className="lg:row-span-2"
          >
            <MockCodeSnippet />
          </FeatureCard>
          <FeatureCard
            tag="FLEXIBLE"
            title="Use the API as a User or Team"
            description="Scale your integration seamlessly from single-user projects to enterprise-wide deployments with granular permission controls."
            className="lg:col-span-2 flex-row"
            cardHeaderProps={{
              className: "grow w-1/2 text-left",
            }}
            cardContentProps={{
              className: "grow w-1/2",
            }}
          >
            <MockUserTeamDiagram />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
