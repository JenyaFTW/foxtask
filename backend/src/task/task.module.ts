import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelperService } from "src/helper/helper.service";
import { TaskController } from "./task.controller";
import { Subtask, Task } from "./task.entity";
import { TaskService } from "./task.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task, Subtask])],
    providers: [TaskService, HelperService],
    controllers: [TaskController],
    exports: []
})
export class TaskModule {}