import { Router } from "express";
import { IncomeController } from "./income.controller";

const router = Router()
const controller = new IncomeController()

/**
 * @swagger
 * tags:
 *   name: Incomes
 *   description: Endpoints para la gestión de ingresos
 */

/**
 * @swagger
 * /api/income/createIncome:
 *   post:
 *     summary: Crear un ingreso
 *     tags: [Incomes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             userId: "user123"
 *             name: "Salario Mensual"
 *             description: "Pago mensual de la empresa"
 *             amount: 3500
 *             frequency: "MONTHLY"
 *             startDate: "2024-01-01"
 *             endDate: "2024-12-31"
 *             categoryId: "cat123"
 *     responses:
 *       200:
 *         description: Ingreso creado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Income created successfully
 *               data:
 *                 id: "income123"
 *                 name: "Salario Mensual"
 *                 amount: 3500
 */
router.post('/createIncome', controller.create)

/**
 * @swagger
 * /api/income/findIncomeById/{id}:
 *   get:
 *     summary: Buscar un ingreso por ID
 *     tags: [Incomes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del ingreso
 *     responses:
 *       200:
 *         description: Ingreso encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Income found successfully
 *               data:
 *                 id: "income123"
 *                 name: "Salario Mensual"
 *                 amount: 3500
 */
router.get('/findIncomeById/:id', controller.findById)

/**
 * @swagger
 * /api/income/updateIncome/{id}:
 *   put:
 *     summary: Actualizar un ingreso
 *     tags: [Incomes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del ingreso a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Sueldo actualizado"
 *             description: "Nuevo salario"
 *             amount: 4000
 *             frequency: "MONTHLY"
 *             startDate: "2024-02-01"
 *             endDate: "2024-12-31"
 *             categoryId: "cat123"
 *     responses:
 *       200:
 *         description: Ingreso actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Income updated successfully
 *               data:
 *                 id: "income123"
 *                 name: "Sueldo actualizado"
 */
router.put('/updateIncome/:id', controller.update)

/**
 * @swagger
 * /api/income/deleteIncome/{id}:
 *   delete:
 *     summary: Eliminar un ingreso
 *     tags: [Incomes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del ingreso a eliminar
 *     responses:
 *       200:
 *         description: Ingreso eliminado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Income deleted successfully
 *               data: {}
 */
router.delete('/deleteIncome/:id', controller.delete)

export default router