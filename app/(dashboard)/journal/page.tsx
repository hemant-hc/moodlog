import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import Question from "@/components/Question";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
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
  const entries = await getEntries();

  return (
    <div className="p-10 bg-zinc-400/10">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
        <div className="p-2">
          Ask questions regarding your journal entries here!
        </div>
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <NewEntryCard />
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
