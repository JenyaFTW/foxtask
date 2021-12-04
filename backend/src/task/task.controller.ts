import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('task') 
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllTasks(@Query() queryDto): Promise<object> {
        return this.taskService.getAllTasks(queryDto);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getTaskById(@Param('id') id: string): Promise<object> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTask(@Body() createTaskDto): Promise<void> {
        return this.taskService.createTask(createTaskDto);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.CREATED)
    async updateUser(@Body() updateTaskDto, @Param('id') id: string): Promise<void> {
        return await this.taskService.updateTask(updateTaskDto, id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteUser(@Param('id') id: string): Promise<void> {
        return await this.taskService.deleteTask(id);
    }
}