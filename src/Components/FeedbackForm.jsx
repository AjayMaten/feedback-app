import React, { useState, useContext } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import { useEffect } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDiasbled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    setBtnDiasbled(false);
    setRating(feedbackEdit.item.rating);
    setText(feedbackEdit.item.text);
  }, [feedbackEdit]);

  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setBtnDiasbled(true);
      setMessage(null);
    } else if (value !== "" && value.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDiasbled(true);
    } else {
      setMessage(null);
      setBtnDiasbled(false);
    }
    setText(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
