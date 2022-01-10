'use strict';

const { Task } = require('../models');

class TaskService {
  async findAll(id) {
    return new Promise((resolve) => {
      Task.findByUserId(id).then((tasks) => resolve(tasks));
    });
  }

  async findById(id, uid) {
    return new Promise((resolve) => {
      Task.findById(id, uid).then((task) => resolve(task));
    });
  }

  async deleteById(id, uid) {
    return new Promise((resolve) => {
      Task.deleteById(id, uid).then((task) => resolve(task));
    });
  }

  async create(options) {
    return new Promise((resolve) => {
      const task = new Task(options);
      task.save().then((task) => resolve(task));
    });
  }
}

module.exports = TaskService;
