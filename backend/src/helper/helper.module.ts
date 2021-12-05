import { Module } from "@nestjs/common";
import { GenTimetable, HelperService } from "./helper.service";

@Module({
    imports: [],
    providers: [HelperService, GenTimetable]
})
export class HelperModule {}