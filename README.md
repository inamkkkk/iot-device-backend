# IoT Device Backend

A simple Node.js backend to receive and store data from IoT devices.

## Features

*   Receives data from IoT devices via HTTP POST requests.
*   Stores data in a MongoDB database.
*   Includes basic authentication using JWT.

## Project Structure


.├── README.md
├── controllers
│   └── deviceController.js
├── middlewares
│   └── authMiddleware.js
├── models
│   └── DeviceData.js
├── routes
│   └── deviceRoutes.js
├── server.js
└── utils
    └── jwtUtils.js


## Setup

1.  Install Node.js and MongoDB.
2.  Clone this repository.
3.  Install dependencies: `npm install`.
4.  Configure the database connection string in `server.js`.
5.  Start the server: `npm start`.

## API Endpoints

*   `POST /api/devices/data`: Receives data from an IoT device. Requires authentication.
*   `POST /api/auth/register`: Registers a new user.
*   `POST /api/auth/login`: Logs in an existing user and returns a JWT.

## Environment Variables

*   `MONGO_URI`: The MongoDB connection string.
*   `JWT_SECRET`: The secret key for JWT signing.
