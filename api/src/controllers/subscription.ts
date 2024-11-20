import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma: PrismaClient = new PrismaClient();

const get = async (req: Request, res: Response) => {
    if (req.params.id === undefined) {
        const sub = await prisma.subscription.findMany();
        res.status(200).json(sub).end();
    } else {
        const { id } = req.params;

        const subs = await prisma.subscription.findFirst({
            where: { id: id },
        });

        res.status(200).json(subs).end();
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const sub = await prisma.subscription.create({
            data: req.body,
        });
        res.status(202).json(sub).end();
    } catch (e) {
        res.status(400).json({ message: `${e}` }).end();
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { idClient, link, name } = req.body;

        const sub = await prisma.subscription.update({
            where: { id: id },
            data: {
                idClient,
                link,
                name
            }
        });
        res.status(202).json(sub).end();
    } catch (e) {
        res.status(400).json({ message: `${e}` }).end();
    }
}

const del = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const sub = await prisma.subscription.delete({
            where: { id: id }
        });

        res.status(202).json(sub).end();
    } catch (e) {
        res.status(404).json({ message: `${e}` }).end();
    }
}

module.exports = {
    get,
    create,
    update,
    del,
}
