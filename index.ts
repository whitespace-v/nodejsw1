import express, { Router } from "express"
import { router } from "./router/router"

const app = express()

app.use(router)

app.listen(3000, () => console.log('run'))