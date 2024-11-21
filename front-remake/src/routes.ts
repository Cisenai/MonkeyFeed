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
	const response = await axios.post(`${apiUrl}/login`, req.body);
	console.log(response.data);
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

