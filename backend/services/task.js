'use strict';

const { Task } = require('../models');

class TaskService {
  async findAll(id) {
    return new Promise(resolve => {
      const tasks = Promise.resolve(Task.findByUserId(id));
      resolve(tasks);
    });
  }

  async create(options) {
    return new Promise(resolve => {
      const task = new Task(options);
      const savedTask = Promise.resolve(task.save());
      resolve(savedTask);
    });
  }
}

module.exports = TaskService;
