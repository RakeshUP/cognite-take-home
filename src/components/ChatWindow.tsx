import { useState } from "react";
import type { Conversation } from "../types";
import { faker } from "@faker-js/faker";

const randomIntervalTime = () => {
  return Math.floor(Math.random() * 4000) + 1000;
};

const pushMessageToConversation = (
  conversations: Conversation,
  selectedContactID: string,
  message: string,
  sender: "me" | "contact"
) => {
  return {
    ...conversations,
    [selectedContactID]: {
      ...conversations[selectedContactID],
      messages: [
        ...conversations[selectedContactID].messages,
        {
          content: message,
          sender,
          timestamp: new Date().toISOString(),
        },
      ],
    },
  };
};

type ChatWindowProps = {
  conversations: Conversation;
  setConversations: React.Dispatch<React.SetStateAction<Conversation>>;
  selectedContactID: string;
};

const ChatWindow: React.FC<ChatWindowProps> = ({
  conversations,
  setConversations,
  selectedContactID,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedContactID) return;

    setConversations((prevConversations) =>
      pushMessageToConversation(
        prevConversations,
        selectedContactID,
        message,
        "me"
      )
    );

    setMessage("");

    setTimeout(() => {
      setConversations((prevConversations) =>
        pushMessageToConversation(
          prevConversations,
          selectedContactID,
          faker.word.words({ count: { min: 5, max: 10 } }),
          "contact"
        )
      );
    }, randomIntervalTime());
  };

  return (
    <div className="w-2/3 flex flex-col">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-200 p-3">
          <img
            className="size-10 rounded-full"
            src={conversations[selectedContactID].image}
            alt={`${conversations[selectedContactID].name}'s display picture`}
          />
          <div>
            <h2 className="font-medium leading-snug">
              {conversations[selectedContactID].name}
            </h2>
            <p className="text-xs text-zinc-500 leading-tight">
              {conversations[selectedContactID].status}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-3">
          {conversations[selectedContactID].messages.map((message) => (
            <div
              key={message.timestamp}
              className={`flex flex-col gap-1 ${
                message.sender === "me" ? "self-end items-end" : "self-start"
              }`}
            >
              <div
                className={`inline-block px-4 py-1 rounded-md ${
                  message.sender === "me"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-zinc-100 rounded-bl-none"
                }`}
              >
                {message.content}
              </div>
              <div className="text-xs text-zinc-500">
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-3 p-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-3 py-2 rounded-md bg-zinc-100 border border-zinc-200"
        />
        <button
          type="submit"
          className="px-3 py-2 min-w-20 rounded-md bg-blue-600 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
