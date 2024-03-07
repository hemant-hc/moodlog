import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";
import Editor from "@/components/Editor";

const getEntry = async (id) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });
  console.log("entry", entry.id);

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);

  return (
    <div className="h-full">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
