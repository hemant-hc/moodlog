const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  const contentWords = entry.content.split(" ");
  const contentPreview =
    contentWords.length > 15
      ? `${contentWords.slice(0, 15).join(" ")} ...`
      : entry.content;
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">Preview: {contentPreview}</div>
    </div>
  );
};

export default EntryCard;
