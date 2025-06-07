import { CodeIcon, GitForkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Blocks/Navbar";
import Footer from "@/components/Blocks/Footer";
import { Metadata } from "next";
import { CTASection } from "@/components/Blocks/cta-section/cta-section";
import ApiFeaturesSection from "@/components/pages-blocks/integrate/api-features-section";

export const metadata: Metadata = {
  title: "Garoo",
  description: "Make a trusted signature for your digital copies.",
};

export default function IntegrateApiPage() {
  return (
    <div className="items-center min-h-screen gap-16">
      <Navbar />
      <header className="container max-w-[1024px] mx-auto text-center mt-36 mb-12 md:mb-16">
        <p className="text-md font-bold mb-4 text-yellow-200">API</p>
        <h1 className="text-4xl max-w-3xl mx-auto md:text-5xl font-bold mb-4">
          Integrate Seamlessly with Documenso’s API
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Build custom document signing workflows with our robust, easy-to-use
          API.
        </p>
        <div className="mt-8 gap-3 flex justify-center">
          <Button size={"lg"}>See How It Works</Button>
          <Button size={"lg"} variant={"outline"}>
            Start Building
          </Button>
        </div>
      </header>

      <ApiFeaturesSection />

      <section className="container mx-auto max-w-[1024px] px-4 grid md:grid-cols-2 gap-8">
        <Link href={"/integrate/api"}>
          <Card className="gap-1">
            <CardHeader>
              <CodeIcon className="h-10 w-10 mb-2" />
              <h3 className="text-2xl font-semibold text-white mb-2">API</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Integrate document management features into external
                applications with powerful APIs.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href={"/integrate/webhooks"}>
          <Card className="gap-1">
            <CardHeader>
              <GitForkIcon className="h-10 w-10 mb-2" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Webhooks
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Automate notifications and updates with real-time event
                triggers.
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>

      <section className="container mx-auto max-w-[1024px] px-4 mt-16 md:mt-24 rounded-xl text-center md:text-left">
        <Card className="p-6">
          <CardHeader>
            <h2 className="max-w-3xl text-2xl font-bold">
              Advanced Compliance, Licensing, or Support Needs? <br />
              Garoo for Enterprise.
            </h2>
          </CardHeader>
          <CardContent className="flex gap-6">
            <div className="grow">
              <p className="max-w-3xl mb-6 text-sm md:text-base">
                Our Enterprise License is ideal for large organizations
                switching to Garoo. It&apos;s available for cloud or self-hosted
                setups, offering a full range of compliance and admin features.
                Contact us for a custom offer based on your organization&apos;s
                needs.
              </p>
              <div className="text-sm text-gray-500">
                <Badge variant={"secondary"}>Hosted by us</Badge>
                <span className="mx-2">OR</span>
                <Badge variant={"secondary"}>Self-hosted</Badge>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mb-6">
              <Button className="px-8 py-3">Contact us</Button>
            </div>
          </CardContent>
        </Card>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}
