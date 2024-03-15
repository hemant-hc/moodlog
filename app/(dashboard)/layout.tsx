import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { IoMdJournal } from "react-icons/io";
import { RiHistoryFill, RiQuestionnaireFill } from "react-icons/ri";

const DashboardLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="h-screen w-screen">
      <aside className="fixed left-0 top-0 bg-bl-light h-full md:w-[60px] w-[40px] border-r border-white/30">
        <div className="flex items-center justify-center md:h-[60px] h-[40px] bg-bl-light text-white font-semibold text-lg">
          <Link href="/journal">
            <Image
              src="/moodlog_icon.jpg"
              className="w-6 h-6 md:w-[26px] md:h-[26px]"
              width={22}
              height={22}
              alt="M"
            />
          </Link>
        </div>
        <ul>
          <li className="flex justify-center py-3">
            <Link href="/journal">
              <IoMdJournal className="md:text-3xl text-2xl" />
            </Link>
          </li>
          <li className="flex justify-center py-3">
            <Link href="/history">
              <RiHistoryFill className="md:text-3xl text-2xl" />
            </Link>
          </li>
          <li className="flex justify-center py-3">
            <Link href="/questions">
              <RiQuestionnaireFill className="md:text-3xl text-2xl" />
            </Link>
          </li>
        </ul>
      </aside>
      <div className="md:ml-[60px] ml-[40px] h-full md:w-[calc(100vw-60px)] w-[calc(100vw-40px)]">
        <header className="flex-col md:h-[60px] py-2 h-[40px] border-b border-white/30 bg-bl-light">
          <div className="flex items-center px-6 justify-between h-full">
            <Link href="/journal" className="px-2 text-2xl font-bold">
              MoodLog
            </Link>
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-40px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
