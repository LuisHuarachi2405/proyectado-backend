import { prisma } from "../../config/prisma";
import type { CreateIncomeDto } from "./dtos/create-income.dto";

export class IncomeRepository {
  async create (data: CreateIncomeDto) {
    return prisma.income.create({ data })
  }

  async findById(id: string) {
    return prisma.income.findUnique({ where: { id } })
  }

  async update(id: string, data: CreateIncomeDto) {
    return prisma.income.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.income.delete({ where: { id } })
  }
}