type Message = {
  content: string;
  sender: "contact" | "me";
  timestamp: string;
};

export type Contact = {
  id: string;
  name: string;
  image: string;
  status: string;
  messages: Message[];
};

export type Conversation = {
  [key: string]: Contact;
};
