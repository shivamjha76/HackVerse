import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">

        {leftIcon && (
  <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400">
    {leftIcon}
  </div>
)}

        <input
          ref={ref}
          className={cn(
            "h-12 w-full rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400",
            "focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100",
            leftIcon ? "pl-12" : "pl-4",
            rightIcon ? "pr-12" : "pr-4",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {rightIcon}
          </div>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;