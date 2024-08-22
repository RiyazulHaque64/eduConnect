import Link from "next/link";

type NavItem = { title: string; href: string };
type TProps = {
  items: NavItem[];
};
const MainNav = ({ items }: TProps) => {
  return (
    <div className="container flex items-center justify-between h-20 py-6">
      <Link href="/">EduConnect</Link>
      {items.length && (
        <nav className="flex gap-6">
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
    </div>
  );
};

export default MainNav;
