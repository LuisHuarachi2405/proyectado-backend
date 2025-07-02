import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router()
const controller = new UserController()

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para la gestión de usuarios
 */

/**
 * @swagger
 * /api/users/createUser:
 *   post:
 *     summary: Crear un usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Juan
 *             email: juan@mail.com
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User created successfully
 *               data:
 *                 id: user123
 *                 name: Juan
 *                 email: juan@mail.com
*/
router.post('/createUser', controller.create)

/**
 * @swagger
 * /api/users/findUserById/{id}:
 *   get:
 *     summary: Buscar usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User found successfully
 *               data:
 *                 id: user123
 *                 name: Juan
 *                 email: juan@mail.com
 */
router.get('/findUserById/:id', controller.findById)

/**
 * @swagger
 * /api/users/updateUser/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Juan Pérez
 *             email: juanperez@mail.com
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User updated successfully
 *               data:
 *                 id: user123
 *                 name: Juan Pérez
 *                 email: juanperez@mail.com
 */
router.put('/updateUser/:id', controller.update)

/**
 * @swagger
 * /api/users/deleteUser/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User delete successfully
 *               data: {}
 */
router.delete('/deleteUser/:id', controller.delete)

export default router