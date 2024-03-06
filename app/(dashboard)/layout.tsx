import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  { name: "Journals", href: "/journal" },
  { name: "History", href: "/history" },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen relative">
      <aside className="absolute left-0 top-0 h-full w-[200px] border-r border-black/10">
        Mood
      </aside>
      <div className="ml-[200px] h-full w-[calc(100vw-200px)]">
        <header className="h-[60px] border-b border-black/10">
          <div className="flex items-center px-6 justify-end h-full">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
