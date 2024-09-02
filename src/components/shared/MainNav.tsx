"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import MobileNav from "./MobileNav";

type NavItem = { title: string; href: string };
type TProps = {
  items: NavItem[];
};
const MainNav = ({ items }: TProps) => {
  const { data: session } = useSession();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [loginSession, setLoginSession] = useState<Session | null>(null);

  useEffect(() => {
    setLoginSession(session);
  }, [session]);

  return (
    <div className="container flex items-center justify-between h-20 py-6">
      <div className="flex items-center gap-6 lg:gap-10">
        <Link href="/">
          <Image src="/logo.png" width={90} height={50} alt="Logo" />
        </Link>
        {items.length && (
          <nav className="hidden lg:flex gap-6">
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
        {showMobileMenu && <MobileNav items={items} />}
      </div>
      <div className="flex items-center gap-3">
        {!loginSession && (
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              Login
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-4">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/register/student">Student</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/register/instructor">Instructor</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-4">
            <DropdownMenuItem className="cursor-pointer">
              <Link href="#">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="#">My Courses</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="#">Testimonial & Certificates</Link>
            </DropdownMenuItem>
            {loginSession && (
              <DropdownMenuItem className="cursor-pointer">
                <button onClick={() => signOut()}>Logout</button>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          className="flex lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  );
};

export default MainNav;
