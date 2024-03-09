import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Journals", href: "/journal" },
  { label: "History", href: "/history" },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen relative">
      <aside className="absolute left-0 top-0 h-full w-[130px] pt-2 border-r border-black/10">
        <div className="px-2 py-4 font-semibold text-lg">Navigation</div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="px-2 py-1 text-lg">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[130px] h-full w-[calc(100vw-130px)]">
        <header className="flex-col h-[60px] border-b border-black/10">
          <div className="flex items-center px-6 justify-between h-full">
            <Link href="/journal" className="px-2 text-2xl font-bold">
              MoodLog
            </Link>
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
