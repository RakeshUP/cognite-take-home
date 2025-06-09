import { faker } from "@faker-js/faker";
import type { Conversation } from "./types";

export const seedConversations = (count: number) => {
  const conversations: Conversation = {};
  for (let i = 0; i < count; i++) {
    const id = faker.string.uuid();
    conversations[id] = {
      id,
      name: faker.person.fullName(),
      image: faker.image.personPortrait(),
      status: faker.helpers.arrayElement([
        "Online",
        "Offline",
        "Away",
        "Busy",
        "Do Not Disturb",
      ]),
      messages: [],
    };
  }
  return conversations;
};
