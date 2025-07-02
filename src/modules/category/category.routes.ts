import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router()
const controller = new CategoryController()

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Endpoints para la gestión de categorías (Income/Expense)
 */

/**
 * @swagger
 * /api/category/createCategory:
 *   post:
 *     summary: Crear una categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Sueldo
 *             description: Ingreso mensual fijo
 *             color: "#00ff00"
 *             icon: "💰"
 *             type: INCOME
 *             userId: user123
 *     responses:
 *       200:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Category created successfully
 *               data:
 *                 id: cat123
 *                 name: Sueldo
 *                 type: INCOME
 *                 isActive: true
 */
router.post('/createCategory', controller.create)

/**
 * @swagger
 * /api/category/findCategoryById/{id}:
 *   get:
 *     summary: Buscar una categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría encontrada
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Category found successfully
 *               data:
 *                 id: cat123
 *                 name: Sueldo
 *                 type: INCOME
 */
router.get('/findCategoryById/:id', controller.findById)

/**
 * @swagger
 * /api/category/updateCategory/{id}:
 *   put:
 *     summary: Actualizar una categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la categoría a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Salario
 *             description: Ingreso mensual principal
 *             color: "#0000ff"
 *             icon: "💼"
 *             type: INCOME
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Category updated successfully
 *               data:
 *                 id: cat123
 *                 name: Salario
 *                 type: INCOME
 */
router.put('/updateCategory/:id', controller.update)

/**
 * @swagger
 * /api/category/deleteCategory/{id}:
 *   delete:
 *     summary: Eliminar una categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la categoría a eliminar
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Category delete successfully
 *               data: {}
 */
router.delete('/deleteCategory/:id', controller.delete)

export default router