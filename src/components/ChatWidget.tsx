import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X } from "lucide-react";
import { extractSiteContent } from "@/utils/contentExtractor";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm Kasi's assistant. I can answer questions about Kasi's experience or technical topics. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const classifyQuestion = (query: string): 'personal' | 'technical' => {
    const personalKeywords = [
      'you', 'your', 'yourself', 'experience', 'background', 'education', 
      'worked', 'job', 'kasi', 'skills', 'contact', 'email', 'phone',
      'expertise', 'specialization', 'certifications', 'resume', 'cv',
      'portfolio', 'history', 'career', 'achievements'
    ];
    
    const lowercaseQuery = query.toLowerCase();
    
    // Check if query contains any personal keywords
    for (const keyword of personalKeywords) {
      if (lowercaseQuery.includes(keyword)) {
        return 'personal';
      }
    }
    
    // Default to technical if no personal indicators found
    return 'technical';
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || isLoading) return;
    
    const newUserMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      // Determine if this is a personal or technical question
      const questionType = classifyQuestion(inputMessage);
      
      // Extract site content for personal questions
      const siteContent = questionType === 'personal' ? extractSiteContent() : "";
      
      // Call Supabase edge function
      const { data, error } = await supabase.functions.invoke('chat-response', {
        body: {
          query: inputMessage,
          siteContent
        }
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      // Add bot response to messages
      const botResponse: Message = {
        id: messages.length + 2,
        content: data.answer || "Sorry, I couldn't process your request.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error getting response:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: messages.length + 2,
        content: "Sorry, I encountered an error. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
    
    // Focus back on textarea after sending
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className={`
          fixed bottom-6 right-6 z-[9999] 
          bg-gradient-to-r from-primary/90 to-primary/80 
          hover:from-primary hover:to-primary/90 
          text-black px-5 py-3 
          rounded-full 
          flex items-center gap-3 
          shadow-lg hover:shadow-primary/25 
          transition-all duration-300 
          hover:scale-105 
          border border-white/10
          sm:px-5 sm:py-3
          xs:px-4 xs:py-2.5
          ${isOpen ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}
        `}
        aria-label="Chat with Kasi"
        disabled={isOpen}
      >
        <span className="relative flex h-6 w-6 items-center justify-center sm:h-6 sm:w-6 xs:h-5 xs:w-5">
          <MessageCircle className="h-5 w-5 text-black sm:h-5 sm:w-5 xs:h-4 xs:w-4" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        </span>
        <span className="font-medium relative text-black">
          Chat with Kasi
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black/30 rounded-full"></span>
        </span>
      </Button>

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
        <div className="flex items-center justify-between p-4 border-b border-primary/10">
          <div className="flex items-center gap-2">
            <div className="relative">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <h3 className="font-medium text-lg">Chat with Kasi</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleChat}
            className="h-8 w-8"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
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
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-2xl bg-secondary/50 text-foreground rounded-tl-none">
                <div className="flex space-x-2 items-center">
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></div>
                  <span className="text-xs ml-1 opacity-70">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-primary/10">
          <div className="flex gap-2">
            <Textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="resize-none min-h-[60px] max-h-[120px]"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={inputMessage.trim() === "" || isLoading}
              className="self-end shrink-0"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 text-xs text-muted-foreground text-center">
            <p>Ask me about Kasi's experience or technical topics!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
