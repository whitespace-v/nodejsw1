import express, { Request, Response } from "express"
import { userSigninActor } from "../actor/userActors/userSigninActor"

export const userRouter = express.Router()

userRouter.post('/signin', (req: Request, res: Response) => res.send(userSigninActor(req, res)) )
// userRouter.post('/signup', (req: Request, res: Response) => )