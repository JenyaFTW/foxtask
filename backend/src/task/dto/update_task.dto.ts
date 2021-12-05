import { subtask } from "../task.interface";

export class UpdateTaskBody {
    name?: string;
    description?: string;
    tag?: string[];
    difficulty?: number;
    importance?: string;
    deadline?: Date;
    estimated_time: number;
    type?: string;
    subtask?: subtask;
}
