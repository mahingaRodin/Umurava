import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Blue link-style with border and outline on focus
        default:
          "border border-blue-600 text-blue-600 hover:text-blue-900  hover:border-blue-800 focus:outline focus:outline-2 focus:outline-blue-600",
        secondary:
          "border border-blue-600 text-blue-600 hover:text-blue-800  hover:border-blue-800 focus:outline focus:outline-2 focus:outline-blue-600",
        destructive:
          "border-transparent text-destructive hover:bg-destructive/80 focus:outline focus:outline-2 focus:outline-destructive",
        outline:
          "border border-gray-400 text-foreground hover:border-gray-600 focus:outline focus:outline-2 focus:outline-gray-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
