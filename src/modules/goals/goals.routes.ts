import { Router } from "express";
import { GoalsController } from "./goals.controller";

const router = Router()
const controller  = new GoalsController();

router.post('/createGoals', controller.create);
router.get('/findGoalById/:id', controller.findById);
router.put('/updateGoals/:id', controller.update);
router.delete('/deleteoGoals/:id', controller.delete);

export default router