import { CodeBlock } from "@/components/ui/code-block";

export const HeroCodeSection = () => {
  return (
    <div className="hero-code-section mt-10">
      <div className="container max-w-[1024px] mx-auto px-4">
        <div className="rounded-lg overflow-hidden border border-gray-800">
          <CodeBlock
            value={`import { GarooClient } from '@garoo/sdk';\nconst garoo = new GarooClient({ apiKey: 'YOUR_KEY' });\nawait garoo.signDocument({ documentId: 'abc123', signerEmail: 'user@example.com' });`}
          />
        </div>
      </div>
    </div>
  );
};
