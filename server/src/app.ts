import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 3001;
const FE_PORT = process.env.FE_PORT || 3000;

const app = express();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: `http://localhost:${FE_PORT}` } })

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})