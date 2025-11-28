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
}

const CustomPhoneInputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { size?: Size }
>(({ size, ...inputProps }, ref) => {
  return (
    <input
      {...inputProps}
      ref={ref}
      className={cn(
        "w-full py-2 px-3 bg-transparent text-foreground placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
        size === "sm" && "py-1.5 text-xs",
        size === "lg" && "py-3 text-base"
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
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "flex w-full items-center rounded-md border ring-offset-background transition-colors focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-50";

    const sizeClasses: Record<Size, string> = {
      sm: "h-8 px-2.5 text-xs",
      md: "h-10 px-3 text-sm",
      lg: "h-12 px-4 text-base",
    };

    const variantClasses: Record<Variant, string> = {
      default:
        "bg-input/30 border-border focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
      ghost:
        "bg-transparent border-transparent focus-within:bg-background focus-within:border-input",
      filled:
        "bg-background border-transparent focus-within:bg-background focus-within:border-input",
    };

    const stateClasses = error
      ? "border-red-500 dark:border-red-400 focus-within:ring-red-500"
      : success
      ? "border-green-500 dark:border-green-400 focus-within:ring-green-500"
      : "";

    const iconPadding = icon ? (iconPosition === "left" ? "pl-9" : "pr-9") : "";

    useEffect(() => {
      const root = document.querySelector(".PhoneInput");
      if (!root) return;

      root
        .querySelector(".PhoneInputCountry")
        ?.classList.add(
          "pl-3",
          "pr-2",
          "border-r",
          "border-gray-300",
          "dark:border-gray-700"
        );

      root
        .querySelector(".PhoneInputCountrySelect")
        ?.classList.add(
          "text-foreground",
          "bg-background",
          "border-none",
          "pr-6",
          "py-2",
          "cursor-pointer",
          "focus:outline-none",
          "focus:ring-0"
        );

      root
        .querySelector(".PhoneInputCountryIcon")
        ?.classList.add(
          "w-6",
          "h-4",
          "rounded-sm",
          "object-cover",
          "shadow-sm",
          "dark:shadow-none"
        );

      root
        .querySelector(".PhoneInputCountrySelectArrow")
        ?.classList.add(
          "text-gray-500",
          "dark:text-gray-400",
          "ml-1",
          "transition-transform"
        );
    }, [value]);

    return (
      <div className="relative w-full">
        {icon && iconPosition === "left" && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
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
            "PhoneInput",
            baseClasses,
            sizeClasses[size as Size],
            variantClasses[variant as Variant],
            stateClasses,
            iconPadding,
            className
          )}
          inputComponent={CustomPhoneInputField}
        />

        {icon && iconPosition === "right" && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
            {icon}
          </div>
        )}
      </div>
    );
  }
);

StyledPhoneInput.displayName = "StyledPhoneInput";
