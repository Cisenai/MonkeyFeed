import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');

const prisma: typeof PrismaClient = new PrismaClient();

const get = async (req: Request, res: Response) => {
    if (req.params === undefined) {
        const client = await prisma.client.get();
    }
}
