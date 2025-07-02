import { Router } from "express";
import { IncomeController } from "./income.controller";

const router = Router()
const controller = new IncomeController()

router.post('/createIncome', controller.create)
router.get('/findIncomeById/:id', controller.findById)
router.put('/updateIncome/:id', controller.update)
router.delete('/deleteIncome/:id', controller.delete)

export default router