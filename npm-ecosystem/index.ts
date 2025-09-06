import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'text/plain');

  response.write('Hello, ');
  response.write('world!');

  response.end();
});

server.listen(3000);