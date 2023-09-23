import { Injectable } from '@nestjs/common'
import { CreateTaskInput } from './dto/createTask.input'
import { PrismaService } from 'src/prisma/prisma.service'
import { Task } from '@prisma/client'
import { UpdateTaskInput } from './dto/updateTask.input'

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany()
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { title, description } = createTaskInput
    return await this.prismaService.task.create({
      data: {
        title,
        description,
      },
    })
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, title, description, status } = updateTaskInput

    return await this.prismaService.task.update({
      where: { id },
      data: {
        title,
        description,
        status,
      },
    })
  }

  async deleteTask(id: number): Promise<Task> {
    return await this.prismaService.task.delete({
      where: { id },
    })
  }
}
