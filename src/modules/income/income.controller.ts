import type { Request, Response } from "express";
import { IncomeService } from "./income.service";

export class IncomeController {
  private incomeService = new IncomeService()

  create = async (req: Request, res: Response) => {
    try {
      const income = await this.incomeService.createIncome(req.body)

      res.json({
        'success': true,
        'message': 'Income created successfully',
        'data': income
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error creating income: ${err}`,
        'data': null
      })
    }
  }

  findById = async (req: Request, res: Response) => {
    try { 
      const income = await this.incomeService.findIncomeById(req.params.id!)

      res.json({
        'success': true,
        'message': 'Income found successfully',
        'data': income
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
      const income = await this.incomeService.updateIncome(req.params.id!, req.body)

      res.json({
        'success': true,
        'message': 'Income updated successfully',
        'data': income
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error updated income: ${err}`,
        'data': null
      })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const income = await this.incomeService.deleteIncome(req.params.id!)

      res.json({
        'success': true,
        'message': 'Income delete successfully',
        'data': income
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error delete income: ${err}`,
        'data': null
      })
    }
  }
}