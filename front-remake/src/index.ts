import express, { Express, Request, Response } from 'express';

const app: Express = express();
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

type User = {
	name: string;
	email: string;
	accessToken: string;
	loggedIn: boolean;
};

declare module 'express-session' {
	interface SessionData {
		user: User
	}
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieSession({
	name: 'user-session',
	secret: 'ultra-secret',
	saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


app.listen(PORT, () => {
	console.log(`[server]: App is running on http://localhost:${PORT}/`);
});

