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
            where: { id: parseInt(id) },
        });

        res.status(200).json(subs).end();
    }
}

const create = async (req: Request, res: Response) => {
    const { idClient, site } = req.body;

    const sub = await prisma.subscription.create({
        data: { idClient: idClient, site: site },
    });

    res.status(202).json(sub).end();
}

const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { idClient, site } =req.body;

    const sub = await prisma.subscription.update({
        where: { id: parseInt(id) },
        data: {
            idClient,
            site,
        }
    });

    res.status(202).json(sub).end();
}

const del = async (req: Request, res: Response) => {
    const { id } = req.params;

    const sub = await prisma.subscription.delete({
        where: { id: parseInt(id) }
    });

    res.status(202).json(sub).end();
}

module.exports = {
    get,
    create,
    update,
    del,
}
