import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

const Feed = require('./controllers/feed_controller');

router.get('/netflix', Feed.getFeed);

router.get('/', (req: Request, res: Response) => {
    res.send("Everything's fine");
});

module.exports = router;
