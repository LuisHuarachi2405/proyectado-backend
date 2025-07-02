import { prisma } from "../../config/prisma";
import type { CreateExpenseDto } from "./dtos/create-expense.dto";

export class ExpenseRepository {
  async create (data: CreateExpenseDto) {
    return prisma.expense.create({ data })
  }

  async findById(id: string) {
    return prisma.expense.findUnique({ where: { id } })
  }

  async update(id: string, data: CreateExpenseDto) {
    return prisma.expense.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.expense.delete({ where: { id } })
  }
}