
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import messages from './messages/messages.js';
import corsMiddleware from './cors/cors.js';

import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.options('/messages', corsMiddleware);
app.use(express.static(path.join(__dirname, 'resume-front-end', 'dist', 'resume', 'browser')));

app.get(['/', '/resume', '/contact', '/projects'], (_, res) => {
    res.sendFile(path.join(__dirname, 'resume-front-end', 'dist', 'resume', 'browser', 'index.html'));
});

app.use('/messages', messages);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});