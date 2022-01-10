'use strict';

const TaskService = require('../../services/task');
const taskService = new TaskService();

exports.getAll = async (req, res) => {
  const { id } = res.locals;
  if (id) {
    const tasks = await taskService.findAll(id);
    res.status(200).json({ tasks: [...tasks] });
  }
};

exports.getTask = async (req, res) => {
  const { taskId } = req.params;
  const { id } = res.locals;
  if (id) {
    const task = await taskService.findById(taskId, id);
    res.status(200).json({ task });
  }
};

exports.postTasks = async (req, res) => {
  const { id } = res.locals;
  if (id) {
    const options = req.body;
    options.user_id = id;

    const task = await taskService.create(options);
    res.status(200).json(task);
  }
};

