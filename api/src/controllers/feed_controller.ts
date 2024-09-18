import { Request, Response } from 'express';
import Parser from 'rss-parser';

const parser: Parser = new Parser();

interface Source {
    title: string,
    image: string,
    link: string,
}

interface Content {
    creator: string,
    title: string,
    link: string,
    pubDate: string,
    isoDate: string,
    summary?: string,
    body: string,
}

interface Data {
    source: Source,
    data: Content[],
};

const feeds: Record<string, string> = {
    diolinux: 'https://diolinux.com.br/feed',
    netflix: 'https://netflixtechblog.com/feed',
    cnnbrasil: 'https://www.cnnbrasil.com.br/feed',
    metropole: 'https://www.metropoles.com/feed',
    theguardian: 'https://feeds.theguardian.com/theguardian/uk/rss',
};

const getFeed = async (req: Request, res: Response) => {
    const feed: string = req.params.feed;
    try {
        const articles = <any>[];

        const feedContent = await parser.parseURL(`https://@${[feed]}/feed`);

        const response: Data = {
            source: {
                title: feedContent.title?? '',
                image: feedContent.image?.url?? '',
                link: feedContent.link?? ''
            },
            data: [],
        };

        feedContent.items.forEach((item) => {
            const article: Content = {
                creator: item.creator!,
                isoDate: item.isoDate!,
                link: item.link!,
                pubDate: item.pubDate!,
                title: item.title!,
                summary: item.contentSnippet!,
                body: item['content:encoded']!,
            };

            response.data.push(article)
        });
        console.log(feedContent);
        res.json(response).status(200).end();
        
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Invalid Feed' }).end();
    }

}

module.exports = { getFeed, };
