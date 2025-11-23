"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "../logos/launch-ui";
import Vizee from "../logos/vizee";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Home",
      isLink: true,
      href: "https://www.launchuicomponents.com/",
    },
    {
      title: "About",
      content: "default",
    },
    {
      title: "Projects",
      content: "components",
    },
  ],
  components = [
    {
      title: "Karolína Cudlínová",
      href: "www.karolina-fitness.cz",
      description:
        "Web Design for a fitness coach",
    },
    {
      title: "Pražský Golfový Klub",
      href: "",
      description:
        "Web Design concept for a golf club",
    },
    {
      title: "YXO Market",
      href: "www.yxomarket.com",
      description:
        "E-Commerce for CS:GO items",
    },
    {
      title: "For Classmates",
      href: "",
      description: "Design concept for Course Detail page",
    },
    {
      title: "Clarity",
      href: "",
      description:
        "App design for boost your productivity",
    },
    {
      title: "Filmoteka",
      href: "/docs/primitives/tooltip",
      description:
        "Web App Development for a film library",
    },
  ],
  logo = <Vizee />,
  logoTitle = "Vizee",
  logoDescription = "Vizee is a studio for creating and boosting your business look.",
  logoHref = "https://www.launchuicomponents.com/",
  introItems = [
    {
      title: "Services",
      href: "https://www.launchuicomponents.com/",
      description:
        "Choose the service you need right now.",
    },
    {
      title: "Pricing",
      href: "https://www.launchuicomponents.com/",
      description: "Read the information about the pricing plan and write to us for more details.",
    },
    {
      title: "Typography",
      href: "https://www.launchuicomponents.com/",
      description: "Styles for headings, paragraphs, lists...etc",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
