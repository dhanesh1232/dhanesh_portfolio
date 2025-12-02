"use client";

import React, { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";
type Variant = "default" | "ghost" | "filled";
type IconPosition = "left" | "right";

export interface StyledPhoneProps
  extends Omit<React.ComponentProps<typeof PhoneInput>, "onChange" | "value"> {
  value?: string;
  onChange?: (value: string | undefined) => void;
  size?: Size;
  variant?: Variant;
  error?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  country?: string;
  helperText?: string;
}

const CustomPhoneInputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { size?: Size }
>(({ size, className, ...inputProps }, ref) => {
  return (
    <input
      {...inputProps}
      ref={ref}
      className={cn(
        "w-full bg-transparent text-sm text-foreground placeholder-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-0",
        size === "sm" && "py-1.5 text-xs",
        size === "md" && "py-2",
        size === "lg" && "py-2.5 text-base",
        className
      )}
    />
  );
});
CustomPhoneInputField.displayName = "CustomPhoneInputField";

export const StyledPhoneInput = React.forwardRef<any, StyledPhoneProps>(
  (
    {
      className,
      value,
      onChange,
      size = "md",
      variant = "default",
      error,
      success,
      icon,
      iconPosition = "left",
      country = "IN",
      helperText,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "PhoneInput flex w-full items-center gap-2 rounded-md border bg-background/80 text-sm transition-all";
    const sizeClasses: Record<Size, string> = {
      sm: "h-9 px-2.5",
      md: "h-10 px-3",
      lg: "h-11 px-3.5 text-base",
    };
    const variantClasses: Record<Variant, string> = {
      default:
        "border-input bg-input/40 hover:bg-input/60 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 focus-within:ring-offset-2 focus-within:ring-offset-background",
      ghost:
        "border-transparent bg-transparent hover:bg-input/30 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 focus-within:ring-offset-2 focus-within:ring-offset-background",
      filled:
        "border-transparent bg-input hover:bg-input/80 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/40 focus-within:ring-offset-2 focus-within:ring-offset-background",
    };
    const stateClasses = error
      ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/50"
      : success
      ? "border-emerald-500 focus-within:border-emerald-500 focus-within:ring-emerald-500/40"
      : "";

    const iconPadding =
      icon && iconPosition === "left"
        ? "pl-9"
        : icon && iconPosition === "right"
        ? "pr-9"
        : "";

    // Style inner react-phone-number-input parts once
    useEffect(() => {
      const root = document.querySelector<HTMLElement>(".PhoneInput");
      if (!root) return;

      root.classList.add("text-foreground");

      root
        .querySelector<HTMLElement>(".PhoneInputCountry")
        ?.classList.add(
          "flex",
          "items-center",
          "gap-1.5",
          "pl-2.5",
          "pr-1.5",
          "border-r",
          "border-border/60"
        );

      root
        .querySelector<HTMLElement>(".PhoneInputCountrySelect")
        ?.classList.add(
          "bg-transparent",
          "text-foreground",
          "text-xs",
          "border-none",
          "cursor-pointer",
          "focus:outline-none",
          "focus:ring-0"
        );

      root
        .querySelector<HTMLElement>(".PhoneInputCountryIcon")
        ?.classList.add(
          "w-5",
          "h-4",
          "rounded-[3px]",
          "shadow-sm",
          "overflow-hidden"
        );

      root
        .querySelector<HTMLElement>(".PhoneInputCountrySelectArrow")
        ?.classList.add(
          "text-muted-foreground",
          "ml-1",
          "transition-transform",
          "group-hover:rotate-180"
        );
    }, []);

    return (
      <div className="w-full space-y-1.5">
        <div className="relative w-full">
          {icon && iconPosition === "left" && (
            <div className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}

          <PhoneInput
            {...props}
            ref={ref}
            international
            defaultCountry={country}
            value={value}
            onChange={onChange}
            className={cn(
              baseClasses,
              sizeClasses[size as Size],
              variantClasses[variant as Variant],
              stateClasses,
              iconPadding,
              "px-0", // padding handled by container + custom input
              className
            )}
            inputComponent={CustomPhoneInputField as any}
          />

          {icon && iconPosition === "right" && (
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
        </div>

        {helperText && (
          <p
            className={cn(
              "text-[11px]",
              error
                ? "text-red-500"
                : success
                ? "text-emerald-400"
                : "text-muted-foreground"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

StyledPhoneInput.displayName = "StyledPhoneInput";
