import express from 'express';
import cors from 'cors';

import { buildHome } from './controllers/mainController.js'
import staticRoute from './routes/static.js'

const app = express();

const { PORT = 4321, HOST } = process.env;

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(staticRoute);

app.get("/", buildHome);

app.get("/api/hello", (req, res) => {
	res.json({ greeting: 'Hello API user!' });
});

app.listen(PORT || 3000, () => {
	console.log(`Your app is listening on http://${HOST}:${PORT}`);
});
