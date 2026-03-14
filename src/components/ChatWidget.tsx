
import React, { useState } from "react";
import ChatToggleButton from "./chat/ChatToggleButton";
import ChatHeader from "./chat/ChatHeader";
import MessageList from "./chat/MessageList";
import ChatInput from "./chat/ChatInput";
import { useChat } from "./chat/useChat";

const ChatWidget = () => {
  const {
    isOpen,
    messages,
    inputMessage,
    isLoading,
    messagesEndRef,
    toggleChat,
    setInputMessage,
    handleSendMessage
  } = useChat();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* Chat toggle button */}
      <ChatToggleButton toggleChat={toggleChat} isOpen={isOpen} />

      {/* Chat window */}
      <div
        className={`
          fixed z-[9999]
          bg-background/95 backdrop-blur-sm
          rounded-2xl shadow-xl border border-primary/20
          flex flex-col
          transition-all duration-300 ease-in-out
          ${isExpanded
            ? 'bottom-4 right-4 left-4 top-4 sm:bottom-6 sm:right-6 sm:left-auto sm:top-6 sm:w-[700px]'
            : 'bottom-6 right-6 w-[90vw] sm:w-[400px] h-[70vh] sm:h-[500px]'
          }
          ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}
        `}
      >
        {/* Chat header */}
        <ChatHeader toggleChat={toggleChat} isExpanded={isExpanded} toggleExpand={toggleExpand} />

        {/* Chat messages */}
        <MessageList
          messages={messages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />

        {/* Chat input */}
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default ChatWidget;
