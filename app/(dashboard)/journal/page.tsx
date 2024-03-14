import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import Question from "@/components/Question";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const getEntries = async () => {
  const user = await getUserByClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
};

const JournalPage = async () => {
  const user = await currentUser();
  const entries = await getEntries();

  return (
    <div className="p-10 bg-bl-dark overflow-">
      <div>
        <div className="text-5xl pb-2">Hello, {user?.firstName}</div>
        <div className="text-slate-400 text-xl mb-10">How was your day?</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-3xl">My Journals</div>
        <NewEntryCard />
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {entries.map((entry) => (
          <Link href={`journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
      <div className="bg-bl-light1 p-4 rounded-lg shadow-md w-1/2">
        <div className="p-2">
          Ask questions regarding your journal entries here!
        </div>
        <Question />
      </div>
    </div>
  );
};

export default JournalPage;
