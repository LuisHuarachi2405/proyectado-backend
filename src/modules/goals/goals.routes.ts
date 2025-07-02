import { Router } from "express";
import { GoalsController } from "./goals.controller";

const router = Router()
const controller  = new GoalsController();

/**
 * @swagger
 * tags:
 *   name: Goals
 *   description: Endpoints para la gestión de metas financieras
 */

/**
 * @swagger
 * /api/goals/createGoals:
 *   post:
 *     summary: Crear una meta financiera
 *     tags: [Goals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             userId: "user123"
 *             name: "Viaje a Japón"
 *             description: "Ahorro para el viaje del próximo año"
 *             targetAmount: 5000
 *             priority: "HIGH"
 *             targetDate: "2025-12-31"
 *     responses:
 *       200:
 *         description: Meta creada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Goal created successfully
 *               data:
 *                 id: "goal123"
 *                 name: "Viaje a Japón"
 */
router.post('/createGoals', controller.create);

/**
 * @swagger
 * /api/goals/findGoalById/{id}:
 *   get:
 *     summary: Buscar una meta por ID
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la meta
 *     responses:
 *       200:
 *         description: Meta encontrada
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 id: "goal123"
 *                 name: "Viaje a Japón"
 */
router.get('/findGoalById/:id', controller.findById);

/**
 * @swagger
 * /api/goals/updateGoals/{id}:
 *   put:
 *     summary: Actualizar una meta financiera
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la meta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Viaje a Japón Actualizado"
 *             description: "Ahorro actualizado"
 *             targetAmount: 6000
 *             priority: "MEDIUM"
 *             targetDate: "2026-06-01"
 *     responses:
 *       200:
 *         description: Meta actualizada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Goal updated
 */
router.put('/updateGoals/:id', controller.update);

/**
 * @swagger
 * /api/goals/deleteoGoals/{id}:
 *   delete:
 *     summary: Eliminar una meta financiera
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la meta a eliminar
 *     responses:
 *       200:
 *         description: Meta eliminada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Goal deleted
 */
router.delete('/deleteoGoals/:id', controller.delete);

export default router