import { prisma } from "../../config/prisma";
import type { CreateCategoryDto } from "./dtos/create-catergory.dto";

export class CategoryRepository {
  async create (data: CreateCategoryDto) {
    return prisma.category.create({ data })
  }

  async findById(id: string) {
    return prisma.category.findUnique({ where: { id } })
  }

  async update(id: string, data: CreateCategoryDto) {
    return prisma.category.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.category.delete({ where: { id } })
  }
}