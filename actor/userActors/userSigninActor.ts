import { Request, Response } from "express"

import bcrypt from 'bcrypt'
import { generateJWT } from "../../utils/generateJWT"

export const userSigninActor = (req: Request, res: Response) => {
    // try {
        // 1. req data -> login, password
        const {login, password} = req.body
        // 2. find user by login
        const user: {id: number, login: string, password: string} = {id: 1, login, password }
        if (!user) {
            return res.send("Пользователь не найден")
        }
        // 3. check password
        let pwd_compare = bcrypt.compareSync(password, user.password)

        if (!pwd_compare) {
            return res.send("Неправильный пароль")
        }
        return res.json({token: generateJWT(user.id, user.login)})

    // } catch (e) {
    //     console.log(e.message)
    //     return res.send("Ошибка сервера")
    // }
}