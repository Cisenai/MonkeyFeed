import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const jwt = require('jsonwebtoken');

const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.loggedIn) {
		const { authToken } = req.session;
		
		jwt.verify(authToken, process.env.JWT_SECRET, (err: any, decoded: any) => {
			if (err) {
				if (err.message === 'jwt expired') {
					req.session.destroy((destroyErr: any) => {
						res.redirect('/login');
					});
				} else {
					console.log(err);
					res.redirect('/login');
				}
			} else {
				if (req.originalUrl === '/login' || req.originalUrl === '/signup') {
					return res.redirect('/home');
				}
				next();
			}
		});

	} else {
		res.redirect('/login');
	}
}

module.exports = { 
	checkLoggedIn,
};

