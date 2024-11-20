import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const cors = require('cors');

const app: Express = express();
const routes = require('./src/routes');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
