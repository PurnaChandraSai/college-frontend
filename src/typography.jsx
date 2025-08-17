import React from "react";
import { cn } from "./lib/utils";

export function H1({ className, ...props }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
      {...props}
    />
  );
}

export function P({ className, ...props }) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
}

export function Lead({ className, ...props }) {
  return (
    <p
      className={cn(
        "text-xl text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function Small({ className, ...props }) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none",
        className
      )}
      {...props}
    />
  );
}

export function Muted({ className, ...props }) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
