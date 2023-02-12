//const Task = require("../model/taskModel");
const {
  createTask,
  getAllTasks,
  getOneTask,
  deleteOneTaks,
  updateTask,
} = require("../Controllers/taskController");

const router = require("express").Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getOneTask);
router.delete("/:id", deleteOneTaks);
router.put("/:id", updateTask);

module.exports = router;
