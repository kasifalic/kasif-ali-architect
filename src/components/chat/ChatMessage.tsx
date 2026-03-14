
import React from "react";
import ReactMarkdown from "react-markdown";

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
        className={`max-w-[85%] p-3 rounded-2xl ${
          message.isUser
            ? 'bg-primary text-primary-foreground rounded-tr-none'
            : 'bg-secondary/50 text-foreground rounded-tl-none'
        }`}
      >
        {message.isUser ? (
          <p className="whitespace-pre-wrap text-sm">{message.content}</p>
        ) : (
          <div className="text-sm chat-markdown">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                code: ({ children }) => (
                  <code className="bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">
                    {children}
                  </code>
                ),
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">
                    {children}
                  </a>
                ),
                h1: ({ children }) => <p className="font-bold text-base mb-1">{children}</p>,
                h2: ({ children }) => <p className="font-bold text-base mb-1">{children}</p>,
                h3: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
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
