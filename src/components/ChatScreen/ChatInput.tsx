import React, { useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Implement the logic to send the message
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
