import { PrismaClient } from '@prisma/client';
import { subscribe } from 'diagnostics_channel';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findFirst({
        where: {
            email: email,
            password: password
        },
        include: {
            subscriptions: true,
        }
        
    });
    console.log(user);
    // window.location.href = 'http://127.0.0.1:5500/front/index.html';
    res.json(user).status(200).end();
    } catch (e) {
        res.json({ message: "Email or paassword incorrect" }).status(401).end();
    }
}

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
    login,
}
