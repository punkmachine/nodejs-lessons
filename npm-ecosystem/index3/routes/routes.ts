import { IncomingMessage, ServerResponse } from 'http';
import { mainPageMarkup, submitSuccessMarkup } from '../views';

const todos: string[] = [];

export function getMainPage(req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end(mainPageMarkup);
}

export function postForm(req: IncomingMessage, res: ServerResponse) {
  let body = '';

  req.on('data', (chunk: Buffer) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    todos.push(body.split('=')[1]);

    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    res.end(submitSuccessMarkup);
  });
}