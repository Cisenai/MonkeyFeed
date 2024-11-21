import { Request, Response, NextFunction } from 'express';

const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.user != undefined && req.session.user.loggedIn) {
		next();
	} else {
		res.redirect('/login');
	}
}

module.exports = { checkLoggedIn };

