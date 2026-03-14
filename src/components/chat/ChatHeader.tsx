
import React from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Maximize2, Minimize2 } from "lucide-react";

interface ChatHeaderProps {
  toggleChat: () => void;
  isExpanded?: boolean;
  toggleExpand?: () => void;
}

const ChatHeader = ({ toggleChat, isExpanded, toggleExpand }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-primary/10">
      <div className="flex items-center gap-2">
        <div className="relative">
          <MessageCircle className="h-5 w-5 text-primary" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500"></span>
        </div>
        <h3 className="font-medium text-lg">Chat with Kasi</h3>
      </div>
      <div className="flex items-center gap-1">
        {toggleExpand && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleExpand}
            className="h-8 w-8"
            aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        )}
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
    </div>
  );
};

export default ChatHeader;
