# Basic Node Server

> In computing, a **server** is a computer program or device that provides functionality for other programs or devices called "clients". 
> Source: [Wikipedia](https://en.wikipedia.org/wiki/Server_(computing))

This was an educational exercise designed to solidify my understanding of client-server architecture as it applies to the web. 

In this project, I create a basic node server that can serve static web content and handle API requests. The structure of the project is as follows:

    .
    ├── README.md
    ├── index.html
    ├── package.json
    └── server
        ├── apiRequestHandler.js
        ├── apiTestData.js
        ├── index.js
        ├── server.js
        ├── utilities.js
        └── webRequestHandler.js

The `server` folder contains all of the files necessary to create a basic web server and manage the requests it receives from clients. To start the server, execute the command `nodemon server.js` in the server directory.
