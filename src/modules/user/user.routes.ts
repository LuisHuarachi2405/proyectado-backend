import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router()
const controller = new UserController()

router.post('/createUser', controller.create)
router.get('/findUserById/:id', controller.findById)
router.put('/updateUser/:id', controller.update)
router.delete('/deleteUser/:id', controller.delete)

export default router