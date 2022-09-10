import React, { useState } from "react";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedBackStats from "./Components/FeedBackStats";
import Header from "./Components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  let deleteHandleClick = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedBackStats feedback={feedback} />
        <FeedbackList handleClick={deleteHandleClick} feedback={feedback} />
      </div>
    </>
  );
}

export default App;
