import { useState } from "react";
import "./ChatBox.css";

const questions = [
  { key: "name", text: "Hi 👋 What's your name?" },
  { key: "branch", text: "Which branch are you from?" },
  { key: "year", text: "Which year are you studying in?" },
  { key: "domain", text: "Which domain would you like to choose?" }
];

function ChatBox() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: questions[0].text }
  ]);
  const [answers, setAnswers] = useState({});

  const handleSend = () => {
    if (!input.trim()) return;

    // user message
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input }
    ]);

    // save answer
    setAnswers((prev) => ({
      ...prev,
      [questions[step].key]: input
    }));

    setInput("");

    // next question
    if (step + 1 < questions.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: questions[step + 1].text }
        ]);
      }, 500);
      setStep(step + 1);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Thanks! 🎉 Your details are recorded." }
        ]);
      }, 500);
      console.log("Final Data:", answers);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Microsoft Innovation Lab</div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type your answer..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
