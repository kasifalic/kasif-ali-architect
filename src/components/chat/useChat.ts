
import { useState, useEffect, useRef } from "react";
import { toast } from "@/components/ui/use-toast";

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
      content: "Hi there! I'm Kasif's assistant. I can answer questions about his projects, experience, or technical skills. How can I help you?",
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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: inputMessage }),
      });

      const data = await response.json();

      if (!data || !data.answer) {
        throw new Error("Invalid response");
      }

      const botResponse: Message = {
        id: messages.length + 2,
        content: data.answer,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error getting response:", error);

      toast({
        title: "Chat Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });

      const errorMessage: Message = {
        id: messages.length + 2,
        content: "Sorry, I couldn't process that. Please try again, or reach out to Kasif directly at kasifaliwdr@gmail.com.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }

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
