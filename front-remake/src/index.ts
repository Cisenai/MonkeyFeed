import express, { Express, } from 'express';
import dotenv from "dotenv";

dotenv.config();

const cors = require('cors');

const app: Express = express();
const path = require('path');
const cookieSession = require('cookie-session');

const Middleware = require('./middleware/middleware.ts');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

declare module 'express-session' {
	interface SessionData {
		name: string;
		email: string;
		image: string;
		authToken: string;
		loggedIn: boolean;
	}
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieSession({
	name: 'user-session',
	secret: process.env.SESSION_SECRET,
	saveUninitialized: false,
	cookie: {
		secure: false,
		httpOnly: true,
	},
}));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Middleware.checkLoggedIn);
app.use(routes);

app.listen(PORT, () => {
	console.log(`[server]: App is running on http://localhost:${PORT}/`);
});
