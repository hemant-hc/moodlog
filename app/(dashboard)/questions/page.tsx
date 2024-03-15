import Question from "@/components/Question";

const QuestionPage = () => {
  return (
    <div className="m-10">
      <div className="bg-bl-light1 mb-6 h-96 p-4 rounded-lg shadow-md">
        <div className="p-4 text-2xl mb-4">
          Ask questions regarding your journal entries here!
        </div>
        <Question />
      </div>
    </div>
  );
};

export default QuestionPage;
