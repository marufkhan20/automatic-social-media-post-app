import React, { useState } from "react";
import SingleQuestion from "./Question";

const question = [
  {
    id: 1,
    title: "Question #1",
    content: [
{    info: "Answer#1",
},]  },
  {
    id: 2,
    title: "Question #2",
    content: [
{    info: "Answer#2",
}]  },
{
  id: 3,
  title: "Question #3",
  content: [
{    info: "Answer#3",
}]  },
]

const FaqContent = () => {
  const [questions, setQuestions] = useState(question);

  return (
    <div>
      <div className="container-faq mt-10">
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default FaqContent;
