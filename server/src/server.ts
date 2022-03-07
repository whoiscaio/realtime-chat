import { config } from 'dotenv';
config();

import { server } from './app';
import './websocket';

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});