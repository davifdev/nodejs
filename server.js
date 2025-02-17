import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.write('Hello Word, Welcome to Node.js');
  res.end();
});

const _PORT = 3000;

server.listen(_PORT, () => {
  console.log(`Server is running on http://localhost:${_PORT}`);
});

