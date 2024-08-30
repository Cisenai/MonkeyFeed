import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const get = async (req: Request, res: Response) => {
    if (req.params.id === undefined) {
        const user = await prisma.user.findMany({ include: { subscriptions: true } });
        res.status(200).json(user).end();
    } else {
        const user = await prisma.user.findFirst({
            where: {
                id: parseInt(req.params.id),
            },
            include: {
                subscriptions: true,
            }
        });
        res.status(200).json(user).end();
    }
}

const create = async (req: Request, res: Response) => {
    const user = await prisma.user.create({
        data: req.body,
    });
    res.status(202).json(user).end();
}

const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { name: name, email: email, }
    });

    res.status(202).json(user).end();
}

const del = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await prisma.user.delete({
        where: { id: parseInt(id) },
    });

    res.status(202).json(user).end();
}

module.exports = {
    get,
    create,
    update,
    del,
}
