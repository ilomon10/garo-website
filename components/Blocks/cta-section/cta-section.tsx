import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto">
          Ready to Supercharge Document Signing?
        </h2>
        <p className="text-lg md:text-lg text-gray-400 max-w-3xl mx-auto mb-10">
          Empower your team with Documenso&#39;s easy-to-integrate signing
          experience. Fast deployment, enhanced security, and improved
          efficiency are just a click away.
        </p>
        <div>
          <Button size={"lg"}>Get Started</Button>
        </div>
        <Badge variant={"outline"} className="mt-4">
          Try our free plan. No credit card required.
        </Badge>
      </div>
    </section>
  );
}
