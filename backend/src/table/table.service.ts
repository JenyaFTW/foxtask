import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GenTimetable } from "src/helper/helper.service";
import { Task } from "src/task/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TableService {
    constructor(private readonly generation: GenTimetable,
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
        ) {}
    
    async genTimetable(table: number[][]) {
        try {
            const tasks = await this.taskRepository.find();
            const resTable = await this.generation.genTable(table, tasks);
            return resTable;
        } catch(err) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}