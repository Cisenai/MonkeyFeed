import { Request, Response } from 'express';
import Parser from 'rss-parser';

const parser: Parser = new Parser();

const getFeed = async (req: Request, res: Response) => {
    const articles = <any>[];

    const feed = await parser.parseURL('https://diolinux.com.br/feed');

    feed.items.forEach((item) => {
        console.log(item.creator);
        articles.push(item);
    });

    res.send(articles).status(200);
}

module.exports = { getFeed };
