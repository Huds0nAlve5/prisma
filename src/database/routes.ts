import { Router } from "express"
import { CreateContaController } from "../controllers/createContaController"

const router = Router()

const createConta = new CreateContaController()

router.post("/conta", createConta.handle);

export { router }