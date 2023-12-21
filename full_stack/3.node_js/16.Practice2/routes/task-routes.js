const express = require('express');
const {
    getTask,
    getTasks,
    deleteTask,
    getUpdateTask,
    updateTask,
    getAddTask,
    addTask
} = require("../controllers/task-controller");

const router = express.Router();

router.get("/tasks/:id", getTask);
router.get("/tasks", getTasks);
router.delete('/tasks/:id', deleteTask);
router.get("/edit/:id", getUpdateTask);
router.post("/edit/:id", updateTask);
router.get("/add-task", getAddTask);
router.post("/add-task", addTask);

module.exports = router;