import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const get = async (req: Request, res: Response) => {
    if (req.params.id != undefined) {
        try {
            const provider = await prisma.provider.findUnique({
                where: {
                    id: req.params.id,
                },
                include: {
                    news: true,
                }
            });
            res.status(200).json(provider).end();
        } catch (e) {
            res.status(404).json({ message: `${e}`}).end();
        }
    } else {
        try {
            const provider = await prisma.provider.findMany();
            res.status(200).json(provider).end();
        } catch (e) {
            res.status(404).json({ message: `${e}`}).end();
        }
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const provider = await prisma.provider.create({
            data: req.body,
        });

        await prisma.user.update({
            where: { id: provider.idClient, },
            data: { provider: { connect: { id: provider.id } } },
        });

        res.status(202).json(provider).end();
    } catch (e) {
        res.status(400).json({ message: `${e}`}).end();
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const provider = await prisma.provider.update({
            where: { id: id },
            data: req.body,
        });
        res.status(202).json(provider).end();
    } catch (e) {
        res.status(400).json({ message: `${e}` }).end();
    }
}

const del = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const provider = await prisma.provider.delete({
            where: { id: id },
        });
        res.status(202).json({ message: `Deleted successfully provider ${id}`, ...provider});
    } catch (e) {
        res.status(404).json({ message: `${e}` }).end();
    }
}

module.exports = {
    get,
    create,
    update,
    del,
};
