import http from 'http';
import { router } from './routes';

const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT);