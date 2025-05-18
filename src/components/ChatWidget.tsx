
import React from "react";
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

  return (
    <>
      {/* Chat toggle button */}
      <ChatToggleButton toggleChat={toggleChat} isOpen={isOpen} />

      {/* Chat window */}
      <div
        className={`
          fixed bottom-6 right-6 z-[9999]
          w-[90vw] sm:w-[400px] h-[70vh] sm:h-[500px]
          bg-background/95 backdrop-blur-sm
          rounded-2xl shadow-xl border border-primary/20
          flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}
        `}
      >
        {/* Chat header */}
        <ChatHeader toggleChat={toggleChat} />

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
