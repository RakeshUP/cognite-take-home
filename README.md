## Cognite Take Home - Basic Messenger App

### Tech Stack

- React
- Vite(for build tool and development server)
- TailwindCSS
- Faker

I've used TailwindCSS for styling since it has been the de-facto standard for the past few years. 

I've used Faker for generating random contacts and messages to make the app feel more real. I didn't want to just send messages. Receiving random messages after a delay added a sense of interaction.

### Features

- Seeds 10 fake contacts during app load. Every reload creates new contacts.
- We can send a message to any contact and it will be added to the conversation.
- The contact sends back a random message within a 5 second delay.
- The conversations are persisted only till the app is reloaded.

### How to run

- Clone the repository
- Run `yarn`
- Run `yarn dev`

The local development server runs on [http://localhost:3000](http://localhost:3000).

### Hosted version

The app is hosted on [https://cognite-take-home.vercel.app/](https://cognite-take-home.vercel.app/)
