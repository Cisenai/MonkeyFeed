import { PrismaClient } from '@prisma/client';
import { subscribe } from 'diagnostics_channel';
import { Request, Response } from 'express';

require('dotenv').config();

process.env.JWT_SECRET = "um-ninho-de-mafagafos-tinha-sete-mafagafinhos.-quem-desmafagar-esses-mafagafinhos-bom-desmagafigador-sera";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const saltRounds = 10;

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
            include: {
                subscriptions: true,
            }
        });

        if (!user) {
            throw Error('Email or password incorrect');
        }
    
        const isMatch = bcrypt.compareSync(password, user.password);
    
        if (isMatch) {
            console.log(process.env.JWT_SECRET);
            const token = jwt.sign(req.body, process.env.JWT_SECRET, {
                expiresIn: '2 days',
            });
            res.json({ user: user, authToken: token}).status(200).end();
        } else {
            throw Error('Email or password incorrect');
        }
    } catch (err) {
        res.json({ message: `${err}` }).status(401).end();
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
    const { email, password, name } = req.body;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    try {
        const user = await prisma.user.create({
            data: {
                password: passwordHash,
                email: email,
                name: name,
            },
        });
        res.status(202).json(user).end();
    } catch (e) {
        return res.status(400).json({ message: e });
    }

}

const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        include: {
            subscriptions: true,
        },
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
