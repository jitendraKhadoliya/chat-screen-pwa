// ChatMessage.tsx
import React from "react";
import { ChatMessage } from "../types";

interface ChatMessageProps {
  chat: ChatMessage;
}

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ chat }) => {
  return (
    <div>
      <p>Time: {chat.time}</p>
      <p>Trip Data: {chat.message}</p>
    </div>
  );
};

export default ChatMessageComponent;
