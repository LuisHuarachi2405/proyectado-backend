import type { Request, Response } from "express";
import { TransactionService } from "./transaction.service";

export class TransactionController {
  private transactionService = new TransactionService()

  create = async (req: Request, res: Response) => {
    try {
      const transaction = await this.transactionService.createTransaction(req.body)

      res.json({
        'success': true,
        'message': 'Transaction created successfully',
        'data': transaction
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error creating transaction: ${err}`,
        'data': null
      })
    }
  }

  findById = async (req: Request, res: Response) => {
    try { 
      const transaction = await this.transactionService.findTransactionById(req.params.id!)

      res.json({
        'success': true,
        'message': 'Transaction found successfully',
        'data': transaction
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
      const transaction = await this.transactionService.updateTransaction(req.params.id!, req.body)

      res.json({
        'success': true,
        'message': 'Transaction updated successfully',
        'data': transaction
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error updated transaction: ${err}`,
        'data': null
      })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const transaction = await this.transactionService.deleteTransaction(req.params.id!)

      res.json({
        'success': true,
        'message': 'Transaction delete successfully',
        'data': transaction
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error delete transaction: ${err}`,
        'data': null
      })
    }
  }
}