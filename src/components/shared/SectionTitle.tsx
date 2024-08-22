import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold", className)}>
      {children}
    </h2>
  );
};
