import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

if (process.env.NODE_ENV !== 'production') {
  console.log('Код запущен в режиме разработки');
}

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  // response.statusCode = 200;
  // response.statusMessage = 'OK';
  // response.setHeader('Content-Type', 'text/plain');

  // response.write('Hello, ');
  // response.write('world!');

  // response.end();

  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf8'
  });

  response.end('<h1>Привет, мир!</h1>', 'utf8');
});

server.listen(process.env.PORT || 3000);