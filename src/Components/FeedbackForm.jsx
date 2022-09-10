import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDiasbled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDiasbled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDiasbled(true);
    } else {
      setMessage(null);
      setBtnDiasbled(false);
    }
    setText(() => e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect />
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
