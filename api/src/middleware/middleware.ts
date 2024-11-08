import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from "jsonwebtoken";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

process.env.JWT_SECRET = "um-ninho-de-mafagafos-tinha-sete-mafagafinhos.-quem-desmafagar-esses-mafagafinhos-bom-desmagafigador-sera";

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const validateAccess = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        (req as CustomRequest).token = decoded;

        next();

    } catch (err) {
        res.status(401).json({ message: 'Please authenticate'});
    }
}
