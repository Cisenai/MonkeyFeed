import express, { Router, Request, Response } from "express";
import dotenv from 'dotenv';
import path = require("path");

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

			req.session.uid = user.id;
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

router.get('/home', async (req: Request, res: Response) => {
	try {
		const response = await axios.get(`${apiUrl}/feed/diolinux`);
		const news = response.data;
		res.render('index', {
			title: 'MonkeyFeed | Home',
			username: req.session.name!,
			news: news.data,
			source: news.source,
		});
	} catch (err) {
		console.log(err);
	}
});

router.get('/profile', (req: Request, res: Response) => {
	res.render('profile', {
		title: 'MonkeyFeed | Profile',
		username: req.session.name!,
		email: req.session.email!,
		userImage: req.session.image?? '/assets/icons/account_circle_blue.svg',
	});
});

router.patch('/profile/update', async (req: Request, res: Response) => {
	try {
		if (req.body === undefined) {
			throw Error('No data given to be updated');
		}

		for (const key in req.body) {
			if (req.body[key] === undefined || req.body[key] === '') {
				delete req.body[key];
			}
		}

		const response = await axios.patch(`${apiUrl}/client/${req.session.uid}`, req.body, {
			headers: {
				'Authorization': req.session.authToken!,
			}
		});

		if (response.status === 202) {
			req.session.name = req.body.name?? req.session.name;
			req.session.email = req.body.email?? req.session.email;
			res.status(202).end();
		}
	} catch (err) {
		res.status(400).json({ message: `${err}` }).end();
	}
});

router.get('/provider', async (req: Request, res: Response) => {
	let subscriptions = [];
	try {
		const response = await axios.get(`${apiUrl}/client/${req.session.uid!}`, {
			headers: {
				'Authorization': req.session.authToken!,
			}
		});
		subscriptions = response.data;
	} catch (err) {
		console.log(err);
	}
	res.render('provider', {
		title: 'Monkeyfeed | Provedores',
		username: req.session.name!,
		subscriptions: subscriptions,
	});
});

// 404 Page
router.all('*', (req: Request, res: Response) => {
	res.status(404).render('not_found', {
		title: 'MonkeyFeed | Page not Found'
	});
});

module.exports = router;
