
import React from "react";

export interface MessageType {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl ${
          message.isUser
            ? 'bg-primary text-primary-foreground rounded-tr-none'
            : 'bg-secondary/50 text-foreground rounded-tl-none'
        }`}
      >
        <p className="whitespace-pre-wrap text-sm">{message.content}</p>
        <div
          className={`text-xs mt-1 opacity-70 ${
            message.isUser ? 'text-right' : 'text-left'
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
