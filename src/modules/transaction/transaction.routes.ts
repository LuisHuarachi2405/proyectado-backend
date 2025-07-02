import { Router } from "express";
import { TransactionController } from "./transaction.controller";

const router = Router();
const controller = new TransactionController();

/**
 * @swagger
 * tags:
 *   - name: Transactions
 *     description: Operaciones relacionadas con las transacciones financieras (ingresos y gastos)
 */

/**
 * @swagger
 * /api/transaction/createTransaction:
 *   post:
 *     summary: Crear una transacción
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             userId: "user123"
 *             amount: 250.50
 *             description: "Pago de suscripción"
 *             date: "2025-06-20T12:00:00Z"
 *             type: "EXPENSE"
 *             status: "COMPLETED"
 *             expenseId: "expense123"
 *     responses:
 *       200:
 *         description: Transacción creada correctamente
 */
router.post('/createTransaction', controller.create);

/**
 * @swagger
 * /api/transaction/findTransactionById/{id}:
 *   get:
 *     summary: Buscar transacción por ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la transacción
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transacción encontrada
 */
router.get('/findTransactionById/:id', controller.findById);

/**
 * @swagger
 * /api/transaction/updateTransaction/{id}:
 *   put:
 *     summary: Actualizar una transacción
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la transacción a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             amount: 300.00
 *             description: "Actualización de gasto"
 *             status: "PENDING"
 *     responses:
 *       200:
 *         description: Transacción actualizada
 */
router.put('/updateTransaction/:id', controller.update);

/**
 * @swagger
 * /api/transaction/deleteTransaction/{id}:
 *   delete:
 *     summary: Eliminar una transacción
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la transacción a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transacción eliminada
 */
router.delete('/deleteTransaction/:id', controller.delete);

export default router;
