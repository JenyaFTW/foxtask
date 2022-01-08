'use strict';

const { Task } = require('../models');

class TaskService {
    async findAll(id) {
        return new Promise(async (resolve) => {
            const tasks = await Task.findByUserId(id);
            resolve(tasks)
        });
    }

    async create(options) {
        return new Promise(async (resolve) => {
            const task = new Task(options);
            const savedTask = await task.save();
            resolve(savedTask);
        });
    }
}

module.exports = TaskService;