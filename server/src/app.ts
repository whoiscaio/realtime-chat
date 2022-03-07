import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const FE_PORT = process.env.FE_PORT || 3000;

const app = express();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: `http://localhost:${FE_PORT}` } })

export { server, io };