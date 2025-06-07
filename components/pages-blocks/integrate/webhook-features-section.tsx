"use client";

import { CheckCircleIcon, CircleIcon, FileText, LinkIcon } from "lucide-react";
import { FeatureCard } from "@/components/Blocks/feature-card";
import React from "react";
import { nanoid } from "nanoid";

const MockWebhookSetup = () => (
  <div className="bg-[#111111] p-4 rounded-lg w-full max-w-xs mx-auto shadow-lg">
    <p className="text-xs text-gray-500 mb-1 text-center">Your Webhooks</p>
    <div className="bg-[#2A2A2A] p-3 rounded-md">
      <p className="text-xs text-gray-400 truncate">
        cit5kf2ea001osl139dlyl3oh
      </p>
      <div className="flex items-center my-2">
        <LinkIcon className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
        <p className="text-sm text-lime-400 truncate">
          https://webhook.site/2eadfcbb-dd...
        </p>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs bg-green-500/30 text-green-400 px-2 py-0.5 rounded-full">
          ENABLED
        </span>
        <span className="text-xs text-gray-500">
          document.created <span className="text-gray-400">+3</span>
        </span>
      </div>
    </div>
  </div>
);

const MockWebhookTriggers = () => {
  const triggers = [
    { name: "document.created", active: true },
    { name: "document.sent", active: false },
    { name: "document.opened", active: false },
    { name: "document.signed", active: false },
  ];
  return (
    <div className="bg-[#111111] p-4 rounded-lg w-full max-w-xs mx-auto shadow-lg">
      <p className="text-sm text-gray-300 mb-3">Triggers</p>
      <div className="space-y-2">
        {triggers.map((trigger) => (
          <div
            key={trigger.name}
            className="flex items-center justify-between bg-[#2A2A2A] p-2 rounded-md"
          >
            <div className="flex items-center">
              <FileText className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-xs text-gray-300">{trigger.name}</span>
            </div>
            {trigger.active ? (
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
            ) : (
              <CircleIcon className="h-4 w-4 text-gray-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MockSecretWord = () => {
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(nanoid());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(163, 230, 53, 0.2) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          maskImage:
            "radial-gradient(circle at center, white, transparent 70%)",
        }}
      />
      <div className="relative z-10 bg-[#2A2A2A] px-3 py-1.5 rounded-md shadow-xl">
        <span className="text-sm font-mono text-lime-400 tracking-wider">
          {value}
        </span>
      </div>
    </div>
  );
};

const MockNotification = () => (
  <div className="bg-[#2A2A2A] p-4 rounded-lg w-full max-w-[200px] mx-auto shadow-xl text-center">
    <FileText className="h-10 w-10 text-gray-500 mx-auto mb-3" />
    <p className="text-sm text-white font-semibold">
      Dwight has signed your document
    </p>
    <p className="text-xs text-gray-400 mt-1">Contract.pdf</p>
    <p className="text-xs text-gray-500 mt-0.5">Oct 26, 2024 at 10:41 AM...</p>
  </div>
);

export default function WebhookFeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-[1024px] px-4">
        <div className="grid md:grid-cols-12 gap-6">
          <FeatureCard
            tag="SETUP"
            title="Create & Manage Your Webhooks"
            description="Create and Customize Webhooks Easily From the Dashboard"
            className="lg:col-span-5"
          >
            <MockWebhookSetup />
          </FeatureCard>
          <FeatureCard
            tag="TRIGGERS"
            title="Choose your triggers"
            description="Respond to events that matter to your workflow."
            className="lg:col-span-7 flex-col-reverse"
          >
            <MockWebhookTriggers />
          </FeatureCard>
          <FeatureCard
            tag="SECURE"
            title="Set a Secret Word"
            description="Enhance security with a custom payload your endpoint can validate."
            className="lg:col-span-6"
          >
            <MockSecretWord />
          </FeatureCard>
          <FeatureCard
            tag="NOTIFICATION"
            title="Get notified in real time"
            description="Get instant notifications for every triggered event."
            className="lg:col-span-6 flex-col-reverse"
            cardContentProps={{ className: "flex items-center" }}
          >
            <MockNotification />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
