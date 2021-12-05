import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenTimetable } from "src/helper/helper.service";
import { Task } from "src/task/task.entity";
import { TableController } from "./table.controller";
import { TableService } from "./table.service";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [TableService, GenTimetable],
    controllers: [TableController]
})
export class TableModule {}