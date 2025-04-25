
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'resume-front-end', 'dist', 'resume', 'browser')));

app.get(['/', '/resume', '/contact', '/projects'], (_, res) => {
    res.sendFile(path.join(__dirname, 'resume-front-end', 'dist', 'resume', 'browser', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});