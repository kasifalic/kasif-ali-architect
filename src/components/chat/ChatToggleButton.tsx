
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ChatToggleButtonProps {
  toggleChat: () => void;
  isOpen: boolean;
}

const ChatToggleButton = ({ toggleChat, isOpen }: ChatToggleButtonProps) => {
  return (
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
  );
};

export default ChatToggleButton;
