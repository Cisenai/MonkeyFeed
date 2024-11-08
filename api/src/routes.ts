import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

const Feed = require('./controllers/feed_controller');
const Client = require('./controllers/client');
const Sub = require('./controllers/subscription');

const midleware = require('./middleware/middleware');

router.get('/feed/:feed', Feed.getFeed);

router.post('/login', Client.login);
router.get('/client', midleware.validateAccess, Client.get);
router.get('/client/(:id)', midleware.validateAccess, Client.get);
router.post('/client', Client.create);
router.patch('/client/(:id)', midleware.validateAccess, Client.update);
router.delete('/client/(:id)', midleware.validateAccess, Client.del);

router.get('/subs', midleware.validateAccess, Sub.get);
router.get('/subs/(:id)', midleware.validateAccess, Sub.get);
router.post('/subs', midleware.validateAccess, Sub.create);
router.patch('/subs/(:id)', midleware.validateAccess, Sub.update);
router.delete('/subs/(:id)', midleware.validateAccess, Sub.del);

router.get('/', (req: Request, res: Response) => {
    res.send("Everything's fine");
});

module.exports = router;
