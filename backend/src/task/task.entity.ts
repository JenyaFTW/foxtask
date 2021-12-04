import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({default: null})
    tag?: string;

    @Column()
    difficulty: number;

    @Column({default: null})
    importance?: number;

    @Column()
    deadline: Date;

    @Column()
    type: string;

    @Column()
    id_user: number;
}

@Entity("subtasks")
export class Subtask {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    time_spent_wanted: number;

    @Column()
    task_id: number;
}