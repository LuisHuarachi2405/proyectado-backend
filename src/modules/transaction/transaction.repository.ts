import { prisma } from "../../config/prisma";
import type { CreateTransactionDto } from "./dtos/create-transaction.dto";

export class TransactionRepository {
  async create (data: CreateTransactionDto) {
    return prisma.transaction.create({ data })
  }

  async findById(id: string) {
    return prisma.transaction.findUnique({ where: { id } })
  }

  async update(id: string, data: CreateTransactionDto) {
    return prisma.transaction.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.transaction.delete({ where: { id } })
  }
}