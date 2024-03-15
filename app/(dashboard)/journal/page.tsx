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
        <div className="md:text-3xl sm:text-2xl text-xl">My Journals</div>
        <NewEntryCard />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-4">
        {entries.map((entry) => (
          <Link href={`journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
