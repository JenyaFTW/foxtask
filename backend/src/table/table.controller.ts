import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { TableService } from "./table.service";

@Controller('table')
export class TableController {
    constructor(private readonly tableService: TableService) {}
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async generateTimetable(@Body() table: number[][]): Promise<number[][]> {
        return this.tableService.genTimetable(table)
    }
}