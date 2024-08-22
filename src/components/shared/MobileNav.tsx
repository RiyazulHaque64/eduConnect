"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type NavItem = { title: string; href: string };
type TProps = {
  items: NavItem[];
};

const MobileNav = ({ items }: TProps) => {
  return (
    <div className="fixed top-20 left-4 right-4 bg-popover border shadow-md p-6 rounded-md animate-in slide-in-from-bottom-80 z-30">
      {items.length && (
        <nav className="flex flex-col gap-4">
          {items.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="text-lg sm:text-sm font-medium transition-colors hover:text-foreground/80"
            >
              {title}
            </Link>
          ))}
        </nav>
      )}
      <div className="flex items-center gap-3 mt-6">
        <Link
          href="/login"
          className={cn(buttonVariants({ size: "sm" }), "px-4")}
        >
          Login
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="sm">
              Register
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 mt-4">
            <DropdownMenuItem className="cursor-pointer">
              <Link href="#">Student</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="#">Instructor</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MobileNav;
