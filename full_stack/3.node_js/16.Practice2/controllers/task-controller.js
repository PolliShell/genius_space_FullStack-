const Task = require("../models/task");
const createPath = require("../helper/createPath");

const handlerError = (res, error) => {
    console.log(error);
    res.render(createPath('error'))
}
const getTask = (req, res) => {
    Task.findById(req.params.id)
        .then((task) => {
            if (!task) {
                return res.status(404).send('Task not found');
            }
            res.render(createPath('task'), {task});
        })
        .catch((error) => handlerError(res, error));
};

const getTasks = (req, res) => {
    const title = 'Task';
    Task
        .find()
        .sort({createdAt: -1})
        .then(tasks => res.render(createPath('tasks'), {tasks, title}))
        .catch((error) => handlerError(res, error));
};

const deleteTask = (req, res) => {
    const taskId = req.params.id;

    console.log(`Deleting task with ID: ${taskId}`);

    Task.findByIdAndDelete(taskId)
        .then((task) => {
            if (!task) {
                console.log(`Task with ID ${taskId} not found`);
                // Send a response if the task is not found
                return res.status(404).send('Task not found');
            }

            return Task.find().sort({_id: -1});
        })
        .then((tasks) => {
            res.redirect("/tasks");
        })
        .catch((error) => handlerError(res, error));
};

const getUpdateTask = (req, res) => {
    const title = 'Edit Task';
    Task
        .findById(req.params.id)
        .then(task => res.render(createPath('edit-task'), {task, title}))
        .catch((error) => handlerError(res, error));
};

const updateTask = async (req, res) => {
    const {title, text} = req.body;
    const {id} = req.params;

    try {
        // Используем метод findByIdAndUpdate для поиска и обновления задачи
        const updatedTask = await Task.findByIdAndUpdate(id, {title, text}, {new: true});

        // Проверяем, была ли найдена и обновлена задача
        if (!updatedTask) {
            return res.status(404).send('Задача не найдена');
        }

        // Перенаправляем на страницу с обновлённой задачей или отправляем JSON с обновлёнными данными
        res.redirect(`/tasks`);
        // или res.json(updatedTask);
    } catch (error) {
        // Обрабатываем ошибку, если произошла
        console.error(error);
        res.status(500).send('Произошла ошибка при обновлении задачи');
    }
};

const getAddTask = (req, res) => {
    res.render(createPath('add-task'));
}

const addTask = (req, res) => {
    const {title, text} = req.body;

    const task = new Task({title, text});
    task.save()
        .then(res.redirect("/tasks"))
        .catch((error) => handlerError(res, error));
}

module.exports = {
    getTask,
    getTasks,
    deleteTask,
    getUpdateTask,
    updateTask,
    getAddTask,
    addTask
};