const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

const URI="mongodb+srv://polliandfibi:fibi2017@cluster0.zpebdj8.mongodb.net/tasks-manager?retryWrites=true&w=majority";

const {Task} = require('./models/task2Model')

let tasks = [
    {
        id: 1,
        text: 'Go to shop',
    },
    {
        id: 2,
        text: 'Buy car',
    },
    {
        id: 3,
        text: 'Go for a run',
    },
    {
        id: 4,
        text: 'Read a book',
    },
    {
        id: 6,
        text: 'Go to shop',
    },
];

// app.use(bodyParse.json());
// app.get('/', (req, res) => {
//     return res.send('Hi. Express!');
// })

// app.get('/tasks', (req, res) => {
//     return res.status(200).json(tasks);

// });

// app.post('/tasks', (req, res) => {
//     const newTask = req.body;
//     tasks.push(newTask);

//     return res.status(201).json(newTask);
// });

// app.put('/tasks/:id', (req, res) => {
//     const updatedTask = req.body;
//     const taskId = parseInt(req.params.id);

//     const foundTask = tasks.find(task => task.id === taskId);
//     if (!foundTask) {
//         return res.status(404).json({ message: 'Not found' });
//     }

//     foundTask.text = updatedTask.text;

//     return res.status(200).json(foundTask);
// });


// app.delete('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id);
//     tasks = tasks.filter(t => t.id !== taskId);
//     return res.status(204).json(tasks);
// })

// app.listen(port, () => {
//     console.log(`Server start on http://localhost:${port}`);
// });

app.use(bodyParser.json());

const checkExist = (task, res, err) => {
    if (!task) {
        return res.status(404).json({message: err ?? 'Task not exist'});
    }
}

const serverError = (err, res) => {
    if (err) {
        return res.status(500).json({error: err.message});
    }
}

app.get('/', (req, res) => {
    return res.send('Hi. Express!');
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.status(201).json(tasks);
    } catch (e) {
        console.log("Task creation error: ", e);
        serverError(e, res);
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const newTask = req.body;

        const task = await Task.create({
            text: newTask.text,
        })
        checkExist(task, res, " Task not exist");

        return res.status(201).json(task);
    } catch (e) {
        console.log("Task creation error: ", e);
        serverError(e, res);
    }

});

app.put('/tasks/:id', async (req, res) => {
    try {
        const {text, isCompleted} = req.body;
        const taskId = parseInt(req.params.id);

        const task = await Task.findByIdAndUpdate(taskId, {text, isCompleted}, {new: true})

        checkExist(task, res);
        return res.status(200).json(task);
    } catch (e) {
        console.log("Task creation error: ", e);
        serverError(e, res);
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const taskId = parseInt(req.params.id);
        const task = await Task.findById(taskId);

        checkExist(task, res);
        return res.status(200).json(task);
    } catch (e) {
        console.log("Task creation error: ", e);
        serverError(e, res);
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        const taskId = parseInt(req.params.id);
        const task = await Task.findByIdAndDelete(taskId)
        checkExist(task, res);
        return res.status(204).json(task);
    } catch (e) {
        console.log("Task creation error: ", e);
        serverError(e, res);
    }
});

mongoose.connect(URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
