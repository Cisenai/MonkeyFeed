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
		failLoggedIn: !req.session.loggedIn,
	});
});

router.post('/login', async (req: Request, res: Response) => {
	try {
		const response = await axios.post(`${apiUrl}/login`, req.body);

		if (response.data.message !== 'Error: Email or password incorrect') {
			const { user, authToken } = response.data;

			req.session.name = user.name;
			req.session.email = user.email;
			req.session.image = user.image;
			req.session.authToken = authToken;
			req.session.loggedIn = true;

			res.status(200).json({ message: 'Login successful', redirect: '/home', }).end();
		} else {
			throw Error(response.data.message);
		}
	} catch (err) {
		res.status(401).json({ message: `${err}` }).end();
	}
});

router.get('/signup', (req: Request, res: Response) => {
	res.render('register', {
		title: 'Monkeyfeed | Sign Up',
		loginLink: `${appUrl}/login`,
	});
});

router.get('/signout', (req: Request, res: Response) => {
	req.session.name = null;
	req.session.email = null;
	req.session.image = null;
	req.session.authToken = null;
	req.session.loggedIn = false;
	res.redirect('/login');
});

router.get('/home', (req: Request, res: Response) => {
	res.render('index', {
		title: 'MonkeyFeed | Home',
		username: req.session.name!,
	});
});

router.get('/profile', (req: Request, res: Response) => {
	res.render('profile', {
		title: 'MonkeyFeed | Profile',
		username: req.session.name!,
		userImage: req.session.image!,
	});
});

module.exports = router;

