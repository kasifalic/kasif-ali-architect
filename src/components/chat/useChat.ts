
import { useState, useEffect, useRef } from "react";
import { extractSiteContent } from "@/utils/contentExtractor";
import { supabase } from "@/integrations/supabase/client";

export interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const useChat = () => {
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
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
      document.querySelector('textarea')?.focus();
    }, 100);
  };

  return {
    isOpen,
    messages,
    inputMessage,
    isLoading,
    messagesEndRef,
    toggleChat,
    setInputMessage,
    handleSendMessage
  };
};
