import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  // TODO: Replace with direct API integration once Sensay.io API access is granted
  const openChatWindow = () => {
    // Using noopener,noreferrer for security - prevents the new page from accessing window.opener
    window.open("https://sensay.io/kasif-ali", "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={openChatWindow}
      className="
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
      "
      aria-label="Chat with Kasi"
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

export default ChatWidget;
