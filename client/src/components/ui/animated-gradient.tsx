import { cn } from "@/lib/utils";

type AnimatedGradientProps = {
  className?: string;
  variant?: "gold" | "navy";
};

/**
 * An animated gradient line component for visual separation
 */
export function AnimatedGradient({
  className,
  variant = "gold",
}: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        "h-1 rounded-full",
        variant === "gold" ? "gold-gradient" : "navy-gradient",
        className
      )}
    />
  );
}

export default AnimatedGradient;
