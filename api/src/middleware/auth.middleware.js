import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { User } from '../models/user.model.js';

export async function authVerify(req, res, next) {

    const header = req.headers.authorization || '';

    const token = header.startsWith('Bearer ') ? header.slice(7) : header;
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    try {
        const { sub } = jwt.verify(token, env.JWT_SECRET_KEY);
        req.user = await User.findById(sub).lean();

        if (!req.user) throw new Error();

        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}