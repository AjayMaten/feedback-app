import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedBackStats from "./Components/FeedBackStats";
import Header from "./Components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  let deleteHandleClick = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedBackStats feedback={feedback} />
        <FeedbackList handleClick={deleteHandleClick} feedback={feedback} />
      </div>
    </>
  );
}

export default App;
