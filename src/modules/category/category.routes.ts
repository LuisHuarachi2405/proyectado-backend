import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router()
const controller = new CategoryController()

router.post('/createCategory', controller.create)
router.get('/findCategoryById/:id', controller.findById)
router.put('/updateCategory/:id', controller.update)
router.delete('/deleteCategory/:id', controller.delete)

export default router