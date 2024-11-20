import express, { Express, Request, Response } from 'express';

const app: Express = express();
const path = require('path');

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => {
	res.render('index', {
		name: 'EJS Template'
	});
});

app.listen(PORT, () => {
	console.log(`[server]: App is running on http://localhost:${PORT}/`);
});

