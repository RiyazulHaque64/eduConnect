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
      <header className="border-b z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0">
        <MainNav items={navLinks} />
      </header>
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default MainLayout;
