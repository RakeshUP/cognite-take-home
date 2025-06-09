## Cognite Take Home - Basic Messenger App

### Tech Stack

- React
- Vite(for build tool and development server)
- TailwindCSS(for styling)
- Faker(for generating random data)

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
