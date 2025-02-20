import jwt from 'jsonwebtoken';
export const generateJWT = (id: number, login: string) => jwt.sign({id,login}, "TOKEN", {expiresIn: '24h'})