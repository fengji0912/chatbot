// app/page.tsx
"use client";

import React, { useState } from 'react';
import Chat from './Chat';

const HomePage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleAddMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Chatbot</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg">
        <Chat messages={messages} onAddMessage={handleAddMessage} />
      </div>
    </div>
  );
};

export default HomePage;

