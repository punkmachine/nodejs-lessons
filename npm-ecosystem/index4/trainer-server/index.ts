import path from 'path';
import express from 'express';

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT);