const Task = require("../Models/taskModel");

//create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

//get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//get one task
const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`no task with id ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//delete a task
const deleteOneTaks = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToDelete = await Task.findByIdAndDelete(id);
    if (!taskToDelete) {
      return res.status(404).json(`no task with id ${id}`);
    }
    res.status(200).send(`${id} is deleted`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskToUpdate = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!taskToUpdate) {
      return res.status(404).json(`no task with id ${id}`);
    }
    res.status(200).json(taskToUpdate);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getOneTask,
  deleteOneTaks,
  updateTask,
};
