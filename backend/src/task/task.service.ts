import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { find } from "rxjs";
import { HelperService } from "src/helper/helper.service";
import { Like, Repository } from "typeorm";
import { Subtask, Task } from "./task.entity";
import { createTaskBody, queryTaskGet } from "./task.interface";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
        @InjectRepository(Subtask)
        private readonly subtaskRepository: Repository<Subtask>,
        private readonly helper: HelperService
        ) {}
    
    async getAllTasks(query: queryTaskGet): Promise<object> {
        try {
            const conditions = await this.helper.prepareQuery(query)

            const data = await this.taskRepository
                .createQueryBuilder('tasks')
                .leftJoinAndSelect('subtasks', 'subtask', 'tasks.id = subtask.id')
                .where(conditions)
                .orderBy('tasks.difficulty', 'DESC')
                .addOrderBy('tasks.importance', 'DESC')
                .getRawMany();
            
            return data;
        } catch(err) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getTaskById(id: string): Promise<object> {
        try {
            const task = await this.taskRepository
                .createQueryBuilder('tasks')
                .leftJoinAndSelect('subtasks', 'subtask', 'tasks.id = subtask.id')
                .where(`tasks.id = ${id}`)
                .orderBy('tasks.difficulty', 'DESC')
                .addOrderBy('tasks.importance', 'DESC')
                .getRawMany();
            return task;
        } catch(err) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createTask(body: createTaskBody): Promise<void> {
        try {
            if(this.helper.validationTaskBody(body)) {
                
                await this.taskRepository.save(body);
            }

        } catch(err) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateTask(body, id: string): Promise<void> {
        try {
            return;
        } catch(err) {
            throw new HttpException(`Error update task -> ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteTask(id: string):  Promise<void> {
        try {
            return;
        } catch(err) {
            throw new HttpException(`Error delete task -> ${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}