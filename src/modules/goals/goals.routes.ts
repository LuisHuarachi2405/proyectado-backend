import { Router } from "express";
import { GoalsController } from "./goals.controller";

const router = Router()
const controller  = new GoalsController();

// #swagger.tags = ['Goals']
// #swagger.autoBody = true 
// #swagger.summary = 'Crear una meta financiera'
// #swagger.description = 'Crear una meta financiera'
// #swagger.requestBody = {
//   required: true,
//   content: {
//     "application/json": {
//       example: {
//         userId: "user123",
//         name: "Viaje a Japón",
//         description: "Ahorro para el viaje del próximo año",
//         targetAmount: 5000,
//         priority: "HIGH",
//         targetDate: "2025-12-31"
//       }
//     }
//   }
// }
router.post('/createGoals', controller.create);

// #swagger.tags = ['Goals']
// #swagger.description = 'Buscar una meta por ID'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'ID de la meta',
//   required: true,
//   type: 'string'
// }
router.get('/findGoalById/:id', controller.findById);
router.put('/updateGoals/:id', controller.update);
router.delete('/deleteoGoals/:id', controller.delete);

export default router