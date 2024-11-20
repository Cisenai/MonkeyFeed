import express, { Express, Request, Response } from 'express';

const app: Express = express();
const path = require('path');

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
	res.render('./front-remake/src/index', {
		name: 'EJS Template'
	})
});

app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`)
});

