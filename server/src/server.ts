import { config } from 'dotenv';
config();

import './websocket';
import { server } from './app';

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})