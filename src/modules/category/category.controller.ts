import type { Request, Response } from "express";
import { CategoryService } from "./category.service";

export class CategoryController {
  private categoryService = new CategoryService()

  create = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.createCategory(req.body)

      res.json({
        'success': true,
        'message': 'Category created successfully',
        'data': category
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error creating category: ${err}`,
        'data': null
      })
    }
  }

  findById = async (req: Request, res: Response) => {
    try { 
      const category = await this.categoryService.findCategoryById(req.params.id!)

      res.json({
        'success': true,
        'message': 'Category found successfully',
        'data': category
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error not found: ${err}`,
        'data': null
      })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.updateCategory(req.params.id!, req.body)

      res.json({
        'success': true,
        'message': 'Category updated successfully',
        'data': category
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error updated category: ${err}`,
        'data': null
      })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.deleteCategory(req.params.id!)

      res.json({
        'success': true,
        'message': 'Category delete successfully',
        'data': category
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error delete category: ${err}`,
        'data': null
      })
    }
  }
}