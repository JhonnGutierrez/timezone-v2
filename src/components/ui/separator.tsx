import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <div className="relative w-0 flex items-center">
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-zinc-400 absolute z-0",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-[12px] w-[1px]",
          className,
        )}
        {...props}
      />
    </div>
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
