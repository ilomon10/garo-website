import { CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cx } from "class-variance-authority";
import { Navbar } from "@/components/Blocks/Navbar";
import Footer from "@/components/Blocks/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garoo",
  description: "Make a trusted signature for your digital copies.",
};

export default function PricingPage() {
  return (
    <div className="items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <header className="text-center mt-36 mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
        <p className="text-lg">
          Signing for every scale. Powered by our Fair-Use-Policy:{" "}
          <Link
            href="/fair"
            target="_blank"
            className="text-primary hover:text-lime-700 underline"
          >
            garoo.com/fair
            <ExternalLink className="inline-block w-4 h-4 ml-1" />
          </Link>
        </p>
      </header>

      <div className="container max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch px-4">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={cx(
              "flex flex-col",
              plan.highlighted ? "border bg-muted" : "border-none shadow-none"
            )}
          >
            <CardHeader className="p-6">
              <CardTitle className="text-2xl font-semibold mb-1">
                {plan.name}
              </CardTitle>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== "$0" && (
                  <span className="text-sm text-muted-foreground ml-1">
                    {plan.frequency}
                  </span>
                )}
              </div>
              {plan.price === "$0" && (
                <p className="text-sm text-muted-foreground">
                  {plan.frequency}
                </p>
              )}

              {plan.billedYearly && (
                <div className="flex items-center space-x-2 my-3">
                  <span className="inline-block w-3 h-3 bg-yellow-300 rounded-full"></span>
                  <span className="text-sm ">{plan.billedYearly.text}</span>
                  <Badge>Save {plan.billedYearly.save}</Badge>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              {plan.hostedByUs && (
                <Badge
                  variant={plan.highlighted ? "default" : "secondary"}
                  className="mb-4"
                >
                  Hosted by us
                </Badge>
              )}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 mt-auto">
              <Button className={`w-full`}>{plan.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="container mx-auto mt-16 md:mt-24 rounded-xl text-center md:text-left">
        <Card className="p-6">
          <CardHeader>
            <h2 className="max-w-3xl text-2xl font-bold">
              Advanced Compliance, Licensing, or Support Needs? <br />
              Garoo for Enterprise.
            </h2>
          </CardHeader>
          <CardContent className="flex gap-6">
            <div className="flex-grow">
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
      </div>
      <Footer />
    </div>
  );
}

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    frequency: "Free forever",
    highlighted: false,
    hostedByUs: true,
    features: [
      "5 standard documents per month",
      "Up to 10 recipients per document",
      "No credit card required",
    ],
    cta: "Get started",
  },
  // {
  //   name: "Individual",
  //   price: "$25",
  //   frequency: "per/month",
  //   billedYearly: {
  //     text: "Billed yearly",
  //     save: "$60",
  //   },
  //   highlighted: false,
  //   hostedByUs: true,
  //   features: [
  //     "Unlimited Documents",
  //     "API Access for Personal Use",
  //     "Email Support",
  //     "Premium Profile Name",
  //   ],
  //   cta: "Get started",
  // },
  {
    name: "Teams",
    price: "$8",
    frequency: "per/month/user",
    billedYearly: {
      text: "Billed yearly",
      save: "$120",
    },
    highlighted: true,
    hostedByUs: true,
    features: [
      "5 Users Minimum",
      "Add More Users Anytime",
      "Unlimited Documents",
      "API Access for Automation",
      "Email Support",
      "Embedding",
    ],
    cta: "Get started",
  },
  {
    name: "Platform",
    price: "$250",
    frequency: "per/month",
    billedYearly: {
      text: "Billed yearly",
      save: "$600",
    },
    highlighted: false,
    hostedByUs: true,
    features: [
      "Unlimited Documents",
      "Unlimited API Access",
      "1 Team Included",
      "Whitelabeled Embedding",
      "Email and Discord Support",
      "Integration Support",
    ],
    cta: "Get started",
  },
];
