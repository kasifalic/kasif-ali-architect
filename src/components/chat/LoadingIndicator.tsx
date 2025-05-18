
import React from "react";

const LoadingIndicator = () => {
  return (
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
  );
};

export default LoadingIndicator;
