import { Router } from "express";
import { ExpenseController } from "./expense.controller";

const router = Router()
const controller = new ExpenseController()

/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: Endpoints para la gestión de gastos
 */

/**
 * @swagger
 * /api/expense/createExpense:
 *   post:
 *     summary: Crear un gasto
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             userId: "user123"
 *             name: "Renta mensual"
 *             description: "Pago mensual del departamento"
 *             amount: 1200
 *             frequency: "MONTHLY"
 *             startDate: "2024-01-01"
 *             endDate: "2024-12-31"
 *             categoryId: "cat456"
 *     responses:
 *       200:
 *         description: Gasto creado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Expense created successfully
 *               data:
 *                 id: "expense123"
 *                 name: "Renta mensual"
 *                 amount: 1200
 */
router.post('/createExpense', controller.create)

/**
 * @swagger
 * /api/expense/findExpenseById/{id}:
 *   get:
 *     summary: Buscar un gasto por ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del gasto
 *     responses:
 *       200:
 *         description: Gasto encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 id: "expense123"
 *                 name: "Renta mensual"
 */
router.get('/findExpenseById/:id', controller.findById)

/**
 * @swagger
 * /api/expense/updateExpense/{id}:
 *   put:
 *     summary: Actualizar un gasto
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del gasto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Renta actualizada"
 *             description: "Pago actualizado"
 *             amount: 1300
 *             frequency: "MONTHLY"
 *             startDate: "2024-02-01"
 *             endDate: "2024-12-31"
 *             categoryId: "cat789"
 *     responses:
 *       200:
 *         description: Gasto actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Expense updated
 */
router.put('/updateExpense/:id', controller.update)

/**
 * @swagger
 * /api/expense/deleteExpense/{id}:
 *   delete:
 *     summary: Eliminar un gasto
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del gasto a eliminar
 *     responses:
 *       200:
 *         description: Gasto eliminado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Expense deleted
 */
router.delete('/deleteExpense/:id', controller.delete)

export default router