import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const saltRounds = 10;

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: { email: email, },
            include: { subscriptions: true, }
        });

        if (!user) {
            throw Error('Email or password incorrect');
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (isMatch) {
            const token = jwt.sign(
                { name: user.name, email: user.email, },
                process.env.JWT_SECRET, 
                { expiresIn: '1d', },
            );
            res.json({ 
                user: {
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    subscriptions: user.subscriptions,
                }, 
                authToken: token,
            }).status(200).end();
        } else {
            throw Error('Email or password incorrect');
        }
    } catch (err) {
        res.json({ message: `${err}` }).status(401).end();
    }
}

const get = async (req: Request, res: Response) => {
    if (req.params.id === undefined) {
        const user = await prisma.user.findMany({ 
            omit: { password: true, },
            include: { subscriptions: true } 
        });
        res.status(200).json(user).end();
    } else {
        const user = await prisma.user.findFirst({
            omit: { password: true, },
            where: { id: req.params.id, },
            include: { subscriptions: true, }
        });
        res.status(200).json(user).end();
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = await prisma.user.create({
            data: {
                password: passwordHash,
                email: email,
                name: name,
            },
        });
        res.status(202).json({
            id: user.id,
            name: user.name,
            email: user.email,
        }).end();
    } catch (err) {
        return res.status(400).json({ message: `${err}` });
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.update({
            where: { id: id },
            include: {
                subscriptions: true,
            },
            data: req.body,
        });

        res.status(202).json({
            id: user.id,
            name: user.name,
            email: user.email,
        }).end();
    } catch (e) {
        res.status(400).json({ message: `${e}`}).end();
    }
}

const del = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.delete({
            where: { id: id },
        });
        res.status(202).json(user).end();
    } catch (e) {
        res.status(400).json({ message: `${e}`}).end();
    }
}

module.exports = {
    get,
    create,
    update,
    del,
    login,
}

