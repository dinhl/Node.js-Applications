### Initialize npm (Create package.json)
`$ npm init`

### Installed global dependencies
* [Express Framework](https://www.npmjs.com/package/express)
    * Express.js is a light-weight Node.js framework used to develop web and mobile app
    * Core features:
        * Allowed to set up middleware to respond to HTTP requests
        * Helped organize the web app into a MVC architecture on the server side (from routes, to handling requests and views)
        * Connected with a database like MongoDB with Mongoose (for modeling) to provide a backend for the app

* [Path](https://www.npmjs.com/package/path) 
    * The path module provides utilities for working with file and directory paths
    
* [env-cmd](https://www.npmjs.com/package/env-cmd)
    * For executing commands using an environment variables from an env file
    
* WEB SOCKET PROTOCOL [socket.io](https://www.npmjs.com/package/socket.io)
    * socket.io enables real-time bidirectional event-based communication. It consists of:
        * a Node.js server
        * a Node.js client

* [bad-words](https://www.npmjs.com/package/bad-words)
    * A javascript filter for badwords

### Installed local (development) dependencies 
* [Nodemon](https://www.npmjs.com/package/nodemon)
`$ npm i nodemon --save-dev`
    * Automatically restarting the node app when file changes in the directory are detected

### Applied APIs
* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
    * Allowed user to provide their location to web app

### Set up scripts in package.json
    "scripts": {
        "start": "env-cmd ./config/dev.env node src/index.js",
        "dev": "env-cmd ./config/dev.env nodemon src/index.js"
    },
  
### Execution  
    * Create a "start" script to start the app using node `$ npm run start`
    * Create a "dev" script to start the app using nodemon `$ npm run dev`
