import type { CreateUserDto } from "./dtos/create-user.dto";
import { UserRepository } from "./user.repository";

export class UserService {
  private userRepository = new UserRepository()

  async createUser(data: CreateUserDto) {
    return this.userRepository.create(data)
  }

  async findUserById(id: string) {
    return this.userRepository.findById(id)
  }

  async update(id: string, data: CreateUserDto) {
    return this.userRepository.update(id, data)
  }

  async delete(id: string) {
    return this.userRepository.delete(id)
  }
}