import type { Request, Response } from "express";
import { ExpenseService } from "./expense.service"

export class ExpenseController {
  private expenseService = new ExpenseService()

  create = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.createExpense(req.body)

      res.json({
        'success': true,
        'message': 'Expense created successfully',
        'data': expense
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error creating expense: ${err}`,
        'data': null
      })
    }
  }

  findById = async (req: Request, res: Response) => {
    try { 
      const expense = await this.expenseService.findExpenseById(req.params.id!)

      res.json({
        'success': true,
        'message': 'Expense found successfully',
        'data': expense
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
      const expense = await this.expenseService.updateExpense(req.params.id!, req.body)

      res.json({
        'success': true,
        'message': 'Expense updated successfully',
        'data': expense
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error updated expense: ${err}`,
        'data': null
      })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const expense = await this.expenseService.deleteExpense(req.params.id!)

      res.json({
        'success': true,
        'message': 'Expense delete successfully',
        'data': expense
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error delete expense: ${err}`,
        'data': null
      })
    }
  }
}