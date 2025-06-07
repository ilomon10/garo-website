import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const FeatureCard = ({
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
      className={`text-center items-center pb-6 ${cardHeaderProps?.className}`}
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
