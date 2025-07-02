import type { CreateExpenseDto } from "./dtos/create-expense.dto"
import { ExpenseRepository } from "./expense.repository"

export class ExpenseService {
  private expenseRepository = new ExpenseRepository()

  async createExpense(data: CreateExpenseDto) {
    return this.expenseRepository.create(data)
  }

  async findExpenseById(id: string) {
    return this.expenseRepository.findById(id)
  }

  async updateExpense(id: string, data: CreateExpenseDto) {
    return this.expenseRepository.update(id, data)
  }

  async deleteExpense(id: string) {
    return this.expenseRepository.delete(id)
  }
}