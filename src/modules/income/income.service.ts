import type { CreateIncomeDto } from "./dtos/create-income.dto";
import { IncomeRepository } from "./income.repository";

export class IncomeService {
  private incomeRepository = new IncomeRepository()

  async createIncome(data: CreateIncomeDto) {
    return this.incomeRepository.create(data)
  }

  async findIncomeById(id: string) {
    return this.incomeRepository.findById(id)
  }

  async updateIncome(id: string, data: CreateIncomeDto) {
    return this.incomeRepository.update(id, data)
  }

  async deleteIncome(id: string) {
    return this.incomeRepository.delete(id)
  }
}