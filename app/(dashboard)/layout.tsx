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
      <aside className="absolute left-0 top-0 h-full w-[120px] border-r border-black/30">
        <div className="flex items-center justify-center h-[60px] border-b border-black/30 font-semibold text-lg bg-zinc-500/20 mb-1">
          Navigation
        </div>
        <ul>
          {links.map((link) => (
            <li
              key={link.href}
              className="flex justify-center py-1 text-center text-slate-600 text-md"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[120px] h-full w-[calc(100vw-120px)]">
        <header className="flex-col h-[60px] border-b border-black/30 bg-zinc-500/20">
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
