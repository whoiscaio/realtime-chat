import express from 'express';
import http from 'http';
import io from 'socket.io';
import { config } from 'dotenv';
config();

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})