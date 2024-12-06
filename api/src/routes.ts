import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

const Feed = require('./controllers/feed_controller');
const Client = require('./controllers/client');
const Sub = require('./controllers/subscription');
const Provider = require('./controllers/provider');
const News = require('./controllers/new');

const midleware = require('./middleware/middleware');

router.get('/feed/:id', Feed.getFeed);

router.post('/login', Client.login);
router.get('/client', midleware.validateAccess, Client.get);
router.get('/client/(:id)', midleware.validateAccess, Client.get);
router.post('/client', Client.create);
router.patch('/client/(:id)', midleware.validateAccess, Client.update);
router.delete('/client/(:id)', midleware.validateAccess, Client.del);
router.get('/client/(:id)/feed', midleware.validateAccess, Client.getCurrentFeed);
router.patch('/client/(:id)/feed/(:feed)', midleware.validateAccess, Client.updateCurrentFeed);

router.get('/subs', midleware.validateAccess, Sub.get);
router.get('/subs/(:id)', midleware.validateAccess, Sub.get);
router.post('/subs', midleware.validateAccess, Sub.create);
router.patch('/subs/(:id)', midleware.validateAccess, Sub.update);
router.delete('/subs/(:id)', midleware.validateAccess, Sub.del);

router.get('/provider', midleware.validateAccess, Provider.get);
router.get('/provider/(:id)', midleware.validateAccess, Provider.get);
router.post('/provider', midleware.validateAccess, Provider.create);
router.patch('/provider/(:id)', midleware.validateAccess, Provider.update);
router.delete('/provider/(:id)', midleware.validateAccess, Provider.del);

router.get('/news', midleware.validateAccess, News.get);
router.get('/news/(:id)', midleware.validateAccess, News.get);
router.post('/news', midleware.validateAccess, News.create);
router.patch('/news/(:id)', midleware.validateAccess, News.update);
router.delete('/news/(:id)', midleware.validateAccess, News.del);

router.get('/', (req: Request, res: Response) => {
    res.send("Everything's fine");
});

module.exports = router;
