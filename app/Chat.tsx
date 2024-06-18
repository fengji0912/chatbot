// app/Chat.tsx
"use client";

import React, { useState } from 'react';
import { Input } from '@nextui-org/react';

interface ChatProps {
  messages: string[];
  onAddMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onAddMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    onAddMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              index % 2 === 0 ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {message}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          required
          fullWidth
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
