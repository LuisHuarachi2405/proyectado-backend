import type { CreateTransactionDto } from "./dtos/create-transaction.dto"
import { TransactionRepository } from "./transaction.repository"

export class TransactionService {
  private transactionRepository = new TransactionRepository()

  async createTransaction(data: CreateTransactionDto) {
    return this.transactionRepository.create(data)
  }

  async findTransactionById(id: string) {
    return this.transactionRepository.findById(id)
  }

  async updateTransaction(id: string, data: CreateTransactionDto) {
    return this.transactionRepository.update(id, data)
  }

  async deleteTransaction(id: string) {
    return this.transactionRepository.delete(id)
  }
}