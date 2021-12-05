import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { TableService } from "./table.service";

@Controller('table')
export class TableController {
    constructor(private readonly tableService: TableService) {}
    @Post()
    @UseGuards(AuthService)
    @HttpCode(HttpStatus.CREATED)
    async generateTimetable(@Body() table: number[][]): Promise<number[][]> {
        return this.tableService.genTimetable(table)
    }
}