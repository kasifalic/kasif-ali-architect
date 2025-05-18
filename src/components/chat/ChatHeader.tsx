
import React from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";

interface ChatHeaderProps {
  toggleChat: () => void;
}

const ChatHeader = ({ toggleChat }: ChatHeaderProps) => {
  return (
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
  );
};

export default ChatHeader;
