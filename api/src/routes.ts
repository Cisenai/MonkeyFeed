import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

const Feed = require('./controllers/feed_controller');
const Client = require('./controllers/client')
const Sub = require('./controllers/subscription')

router.get('/netflix', Feed.getFeed);

router.get('/client', Client.get);
router.get('/client/(:id)', Client.get);
router.post('/client', Client.create);
router.put('/client/(:id)', Client.update);
router.delete('/client/(:id)', Client.del);

router.get('/subs', Sub.get);
router.get('/subs/(:id)', Sub.get);
router.post('/subs', Sub.create);
router.put('/subs/(:id)', Sub.update);
router.delete('/subs/(:id)', Sub.del);

router.get('/', (req: Request, res: Response) => {
    res.send("Everything's fine");
});

module.exports = router;
