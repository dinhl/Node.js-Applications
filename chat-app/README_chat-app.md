# Chat App - Real-time Web Application
---
## Features

#### Socket.io Events
  - Setting up a WebSocket server using Node
  - Transfer data between the client and the server

#### WebSocket protocol
  - Support real-time bi-direction communication, which is important for chat app

#### Integrated [geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) 
  - Allowed users to share their locations to web app

#### Event acknowledgements
  - Allowed the receiver of an event to send a message back to the sender. 
  - This is useful for error handling and data validation

#### Filter bad words
  - The server filter the messages from clients

#### Create a form to let users send messages
  - This form should be disabled while messages are being sent to the server to prevent duplicate messages from double-click the send button

#### Rendering messages
- Used a client side templating engine to render messages to the screen
- Applied these libraries in the HTML
    - Mustache: used to render the messages
    - [Moment](https://momentjs.com/): parse, validate, manipulate, and display dates and times in JS
    - Qs: A querystring parser supports nesting and arrays, with a depth limit

#### Working with Time
- Messages contain a timestamp to show the sending time


## Install the dependencies and devDependecies

#### Initialize npm (Create package.json):

`$ npm init `

#### [Express Framework](https://www.npmjs.com/package/express)

` $ npm i express `

- Express.js is a light-weight Node.js framework used to develop web and mobile app
    - Allowed to set up middleware to respond to HTTP requests
    - Helped organize the web app into a MVC architecture on the server side (from routes, to handling requests and views)
    - Connected with a database like MongoDB with Mongoose (for modeling) to provide a backend for the app

#### [Path](https://www.npmjs.com/package/path) 

` $ npm i path `

- Provided utilities for working with file and directory paths
    
#### [env-cmd](https://www.npmjs.com/package/env-cmd)

` $ npm i env-cmd`

- Executed commands using environment variables from an env file

#### WEB SOCKET PROTOCOL [socket.io](https://www.npmjs.com/package/socket.io)

` $ npm i socket.io `

#### socket.io enables real-time bidirectional event-based communication. It consists of:
    - a Node.js server
    - a Node.js client

#### [bad-words](https://www.npmjs.com/package/bad-words)

` npm i bad-words ` 

- A javascript filter for badwords

#### [Nodemon](https://www.npmjs.com/package/nodemon)

`$ npm i nodemon --save-dev`

- Automatically restarting the node app when file changes in the directory are detected

## Set up "start" and "dev" scripts in package.json
    "scripts": {
        "start": "env-cmd ./config/dev.env node src/index.js",
        "dev": "env-cmd ./config/dev.env nodemon src/index.js"
    },
  
  
## Execution  
`$ npm run dev`

or

`$ npm run start`
    