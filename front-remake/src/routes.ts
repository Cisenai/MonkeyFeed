import express, { Router, Request, Response } from "express";

const axios = require('axios');

const router: Router = express.Router();

const PORT = process.env.PORT || 3000;
const appUrl = `http://localhost:${PORT}`;
const apiUrl = 'http://localhost:3001';

const Middleware = require('./middleware/middleware.ts');

router.get('/', (req: Request, res: Response) => {
	if (req.session.user != undefined && req.session.user.loggedIn) {
		res.redirect('/home');
	} else {
		res.redirect('/login');
	}
});

router.get('/login', (req: Request, res: Response) => {
	res.render('login', {
		title: 'MonkeyFeed | Login',
		signupLink: `${appUrl}/signup`,
	});
});

router.post('/login', async (req: Request, res: Response) => {
	console.log(req.body);
	fetch(`${apiUrl}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req.body),
	});
	res.status(200).end();
});

router.get('/signup', (req: Request, res: Response) => {
	res.render('register', {
		title: 'Monkeyfeed | Sign Up',
		loginLink: `${appUrl}/login`,
	});
});

router.get('/home', Middleware.checkLoggedIn, 
	(req: Request, res: Response) => {
		res.render('index', {
			name: 'MonkeyFeed | Home'
		},
	);
});

module.exports = router;

