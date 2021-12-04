export class CreateTaskBody {
    name: string;
    description: string;
    tag?: string[];
    difficulty: string;
    importance?: string;
    deadline: Date;
    type: string;
}