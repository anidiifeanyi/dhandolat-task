# Chat Bot App

A Chat Bot Node app built with MongoDB.
Node,Express provides the RESTful API.
MongoDB stores chats collection.

## Requirements

-   [Node and npm](http://nodejs.org)
-   MongoDB: Make sure you have your own local or remote MongoDB database URI configured in `server.js` file

## Installation

1. Clone the repository
2. Install the application: `npm install`
3. To fix the project : `npm audit fix`
4. Place your own MongoDB URI in `./config/db.js`
5. Config Port in `server.js`
6. Start the server: `node server.js`
7. View in browser at `http://localhost:5100`

## Dependencies

The following depeendencies needs to be installed using npm:

dotenv
express
mongoose
nodemon
socket.io
