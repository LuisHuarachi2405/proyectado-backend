import { prisma } from "../../config/prisma";
import type { CreateUserDto } from "./dtos/create-user.dto";

export class UserRepository {
  async create (data: CreateUserDto) {
    return prisma.user.create({ data })
  }

  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }

  async update(id: string, data: CreateUserDto) {
    return prisma.user.update({ where: { id }, data })
  }

  async delete(id: string) {
    return prisma.user.delete({ where: { id } })
  }
}