const express = require('express');
const http = require('http');
const { Server } = require('socket.io')

const FE_PORT = process.env.FE_PORT || 3000;

const app = express();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: `http://localhost:${FE_PORT}` } });

module.exports = { server, io };
