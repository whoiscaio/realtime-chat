require('dotenv').config();

require('./websocket');
const { server } = require('./app');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})