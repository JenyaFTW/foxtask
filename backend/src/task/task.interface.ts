export interface createTaskBody {
    name: string,
    description: string,
    tag?: string[],
    difficulty: string,
    importance?: string,
    deadline: Date,
    type: string,
}

export interface updateTaskBody {
    name?: string,
    description?: string,
    tag?: string[],
    difficulty?: string,
    importance?: string,
    deadline?: Date,
    type?: string,
}

export interface bodyCreateToDb {
    name: string,
    description: string,
    tag?: string,
    difficulty: number,
    importance?: number,
    deadline: Date,
    type: string,
}

export interface bodyUpdateToDb {
    name?: string,
    description?: string,
    tag?: string,
    difficulty?: number,
    importance?: number,
    deadline?: Date,
    type?: string,
}

enum importance {
    high,
    medium,
    low
}

export interface queryTaskGet {
    tag?: object,
    importance?: importance,
    difficulty?: number
}