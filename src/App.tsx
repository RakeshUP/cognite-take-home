import { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ContactsSidebar from "./components/ContactsSidebar";
import type { Conversation } from "./types";
import { seedConversations } from "./seed-data";

function App() {
  const [conversations, setConversations] = useState<Conversation>({});
  const [selectedContactID, setSelectedContactID] = useState<string | null>(
    null
  );

  // Seed conversations on app load
  useEffect(() => {
    setConversations(seedConversations(10));
  }, []);

  return (
    <>
      <div className="flex min-h-screen max-w-7xl mx-auto border-l border-r border-zinc-200">
        <ContactsSidebar
          conversations={conversations}
          selectedContactID={selectedContactID}
          setSelectedContactID={setSelectedContactID}
        />
        {selectedContactID ? (
          <ChatWindow
            conversations={conversations}
            setConversations={setConversations}
            selectedContactID={selectedContactID}
          />
        ) : (
          <div className="w-2/3 flex items-center justify-center">
            <p className="text-zinc-500 font-medium">
              Select a contact to start chatting
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
