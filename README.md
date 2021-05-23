# Hello, Express.js World!

You can use this sample project to learn how to secure a simple Express.js web application using Auth0.

![Hello, Express.js World!](https://images.ctfassets.net/23aumh6u8s0i/VXjSF6g8d3S70ODNPgAle/fc025c1373e47fb4f4719f6b3c937c4d/hello-express-pug.png)

The `starter` branch offers a functional application that consumes local data to hydrate the user interface. All the starter application routes are public.

The goal is to use Auth0 to get an ID token to hydrate the user profile information present in the `/profile` page and to get an access token to make a secure call to an external API to hydrate the messages present in the `/external-api` page.

## Get Started

Install the project dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.
