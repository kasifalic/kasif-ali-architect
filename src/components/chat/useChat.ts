
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
      content: "Hey! I'm Kasif's portfolio sidekick. Ask me anything about his **projects**, **experience**, or **tech skills** — I've got all the details!",
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

    const botMessageId = messages.length + 2;

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: inputMessage }),
      });

      const contentType = response.headers.get('content-type') || '';

      // Handle streaming SSE response
      if (contentType.includes('text/event-stream') && response.body) {
        // Add empty bot message that we'll stream into
        const botMessage: Message = {
          id: botMessageId,
          content: '',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith('data: ')) continue;
            const data = trimmed.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === botMessageId
                      ? { ...msg, content: msg.content + parsed.content }
                      : msg
                  )
                );
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } else {
        // Fallback: non-streaming JSON response (e.g. error messages)
        const data = await response.json();
        if (!data || !data.answer) throw new Error("Invalid response");

        const botResponse: Message = {
          id: botMessageId,
          content: data.answer,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }
    } catch (error) {
      console.error("Error getting response:", error);

      toast({
        title: "Chat Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });

      const errorMessage: Message = {
        id: botMessageId,
        content: "Sorry, I couldn't process that. Please try again, or reach out to Kasif directly at kasifaliwdr@gmail.com.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
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
