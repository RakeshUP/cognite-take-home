## Cognite Take Home - Basic Messenger App

### Tech Stack

- React
- Vite
- TailwindCSS
- Faker

I've used TailwindCSS for styling since it has been the de-facto standard for the past few years. Vite is used as the build tool and development server since `react.dev` suggests it.

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

### Improvements thought of

I spent between 2-3 hours on this assignment and left out a few things that I'd like to have done:

- Configure eslint and prettier - especially tailwindcss plugins
- The types and data structures to hold the conversations are very basic and I might have missed some cases.
