"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
      {viewport ? <NavigationMenuViewport /> : null}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  children,
  onPointerMove,
  onPointerLeave,
  onFocusCapture,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  const listRef = React.useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, visible: false });

  const moveIndicator = React.useCallback((target: EventTarget | null) => {
    if (!(target instanceof Element) || !listRef.current) {
      return;
    }

    const navTarget = target.closest<HTMLElement>("[data-nav-indicator-target]");
    if (!navTarget || !listRef.current.contains(navTarget)) {
      return;
    }

    const listRect = listRef.current.getBoundingClientRect();
    const targetRect = navTarget.getBoundingClientRect();

    setIndicator({
      left: targetRect.left - listRect.left,
      width: targetRect.width,
      visible: true,
    });
  }, []);

  return (
    <NavigationMenuPrimitive.List
      ref={listRef}
      data-slot="navigation-menu-list"
      className={cn("group relative flex flex-1 list-none items-center justify-center gap-1 pb-1", className)}
      onPointerMove={(event) => {
        moveIndicator(event.target);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        setIndicator((current) => ({ ...current, visible: false }));
        onPointerLeave?.(event);
      }}
      onFocusCapture={(event) => {
        moveIndicator(event.target);
        onFocusCapture?.(event);
      }}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-200 ease-out"
        style={{
          opacity: indicator.visible ? 1 : 0,
          transform: `translateX(${indicator.left}px)`,
          width: indicator.width,
        }}
      />
    </NavigationMenuPrimitive.List>
  );
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle =
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-primary";

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-nav-indicator-target=""
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle, "gap-1", className)}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-px size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute left-0 top-full mt-3 min-w-56 rounded-md border border-border bg-background p-2 text-foreground shadow-lg",
        "data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "block select-none rounded-md px-3 py-2 text-sm font-semibold leading-none text-foreground outline-none transition-colors hover:text-primary focus:text-primary",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-border bg-background shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
