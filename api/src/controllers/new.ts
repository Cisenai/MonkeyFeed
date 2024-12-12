import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const get = async (req: Request, res: Response) => {
    if (req.params.id !== undefined) {
        try {
            const news = await prisma.new.findUnique({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(news).end();
        } catch (e) {
            res.status(404).json({ message: `${e}`}).end();
        }
    } else {
        try {
            const news = await prisma.new.findMany();
            res.status(202).json(news).end();
        } catch (e) {
            res.status(404).json({ message: `${e}`}).end();
        }
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const news = await prisma.new.create({
            data: req.body,
        });
        res.status(202).json(news).end();
    } catch (e) {
        res.status(400).json({ message: `${e}`}).end();
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const news = await prisma.new.update({
            where: { id: id },
            data: req.body,
        });
        res.status(202).json(news).end();
    } catch (e) {
        res.status(404).json({ message: `${e}`}).end();
    }
}

const del = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const news = await prisma.new.delete({
            where: { id: id },
        });
        res.status(202).json({ message: `Deleted successfully provider ${id}`, ...news});
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
