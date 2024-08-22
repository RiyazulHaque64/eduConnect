import MainNav from "@/components/shared/MainNav";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const navLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];
const MainLayout = ({ children }: TProps) => {
  return (
    <div>
      <header>
        <MainNav items={navLinks} />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
