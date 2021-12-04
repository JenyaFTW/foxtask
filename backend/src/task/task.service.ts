import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {
    async getAllTasks(query): Promise<object> {
        return;
    }

    async getTaskById(id: string): Promise<object> {
        return;
    }

    async createTask(body): Promise<void> {
        return;
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