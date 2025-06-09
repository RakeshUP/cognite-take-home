import type { Conversation } from "../types";

type ContactsSidebarProps = {
  conversations: Conversation;
  selectedContactID: string | null;
  setSelectedContactID: (contactID: string | null) => void;
};

const ContactsSidebar: React.FC<ContactsSidebarProps> = ({
  conversations,
  selectedContactID,
  setSelectedContactID,
}) => {
  return (
    <div className="w-1/3 border-r border-zinc-200 p-2">
      <h1 className="px-2 text-xl font-medium">Basic Messenger App</h1>
      <div className="mt-6 space-y-1">
        {Object.values(conversations).map((contact) => (
          <button
            key={contact.id}
            onClick={() => setSelectedContactID(contact.id)}
            className={`w-full text-left flex items-center gap-2 p-2 rounded-md cursor-pointer ${
              selectedContactID === contact.id
                ? "bg-zinc-100 hover:bg-zinc-200"
                : "hover:bg-zinc-100"
            }`}
          >
            <img
              className="size-10 rounded-full"
              src={contact.image}
              alt={`${contact.name}'s display picture`}
            />
            <div>
              <h2 className="font-medium leading-snug">{contact.name}</h2>
              <p className="text-xs text-zinc-500 leading-tight">
                {contact.status}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactsSidebar;
