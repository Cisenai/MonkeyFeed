import express, { Router, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

const axios = require('axios');

const router: Router = express.Router();

const PORT = process.env.PORT || 3000;
const appUrl = `http://localhost:${PORT}`;
const apiUrl = 'http://localhost:3001';

router.get('/', (req: Request, res: Response) => {
	if (req.session.loggedIn) {
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
	try {
		const response = await axios.post(`${apiUrl}/login`, req.body);
		if (response.status === 200) {
			const { user, authToken } = response.data;

			req.session.loggedIn = true;
			req.session.name = user.name;
			req.session.email = user.email;
			req.session.image = user.image;
			req.session.authToken = authToken;

			res.status(200).json({ message: 'Login successful', redirect: '/home', }).end();
		} else {
			res.status(401).end();
		}
	} catch (err) {
		console.log(err);
		res.status(401).json({ message: `${err}` }).end();
	}
});

router.get('/signup', (req: Request, res: Response) => {
	res.render('register', {
		title: 'Monkeyfeed | Sign Up',
		loginLink: `${appUrl}/login`,
	});
});

router.get('/home', (req: Request, res: Response) => {
	res.render('index', {
		title: 'MonkeyFeed | Home',
		username: req.session.name,
	});
});

module.exports = router;

