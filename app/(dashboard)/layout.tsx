import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { IoMdHome, IoMdJournal } from "react-icons/io";
import { RiHistoryFill, RiQuestionnaireFill } from "react-icons/ri";

const DashboardLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="h-screen w-screen">
      <aside className="fixed left-0 top-0 bg-bl-light h-full w-[60px] border-r border-white/30">
        <div className="flex items-center justify-center h-[60px] bg-bl-light text-white font-semibold text-lg mb-1">
          <Link href="/journal">
            <Image src="/moodlog_icon.jpg" width={28} height={28} alt="M" />
          </Link>
        </div>
        <ul>
          <li className="flex justify-center py-3">
            <Link href="/">
              <IoMdHome size={28} />
            </Link>
          </li>
          <li className="flex justify-center py-3">
            <Link href="/journal">
              <IoMdJournal size={28} />
            </Link>
          </li>
          <li className="flex justify-center py-3">
            <Link href="/history">
              <RiHistoryFill size={28} />
            </Link>
          </li>
          <li className="flex justify-center py-3">
            <Link href="/questions">
              <RiQuestionnaireFill size={28} />
            </Link>
          </li>
        </ul>
      </aside>
      <div className="ml-[60px] h-full w-[calc(100vw-60px)]">
        <header className="flex-col h-[60px] border-b border-white/30 bg-bl-light">
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
