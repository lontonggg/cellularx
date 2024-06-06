import React from 'react';

interface ChatBubbleProps {
  message: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
  inverted?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, color, style, inverted }) => {
  return (
    <div className="relative mb-5" style={{ ...style, transform: inverted ? 'scaleX(-1)' : 'none' }}>
      <div 
        className="inline-block rounded-xl p-2 md:p-4 lg:p-5 xl:p-5 text-xs sm:text-base md:text-xl lg:text-2xl xl:text-4xl max-w-xs"
        style={{ 
          backgroundColor: color, 
          color: style?.color || 'white', 
          transform: inverted ? 'scaleX(-1)' : 'none' 
        }}
      >
        {message}
      </div>
      <div 
        className={`chatBubble-arrow ${inverted ? 'transform rotate-90' : 'transform rotate-90'}`}
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

export default ChatBubble;
