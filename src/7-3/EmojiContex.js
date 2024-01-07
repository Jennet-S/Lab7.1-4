import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  const contextValue = {
    isHappy,
    toggleMood,
  };

  return <EmojiContext.Provider value={contextValue}>{children}</EmojiContext.Provider>;
};

export const useEmoji = () => {
  const context = useContext(EmojiContext);

  if (!context) {
    throw new Error('useEmoji must be used within an EmojiProvider');
  }

  return context;
};
