const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const SQLite3 = require('sqlite3').verbose();
const dbName = 'tasks.db';
const port = 3000;
const db = new SQLite3.Database(dbName);





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

const checkExist = (task, res) => {
    if (!task) {
        return res.status(404).json({ message: 'Task not exist' });
    }
}

const serverError = (err, res) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }
}

app.get('/', (req, res) => {
    return res.send('Hi. Express!');
});

app.get('/tasks', (req, res) => {
    db.all('SELECT * FROM tasks', (err, rows) => {
        serverError(err, res);
        return res.status(200).json(rows);
    });
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;

    db.run('INSERT INTO tasks (text) VALUES (?)', [newTask.text], function (err) {
        serverError(err, res);

        // Use this.lastID within the function scope
        return res.status(201).json({ id: this.lastID });
    });
});

app.put('/tasks/:id', (req, res) => {
    const { text } = req.body;
    const taskId = parseInt(req.params.id);

    db.run('UPDATE tasks SET text = ? WHERE id = ?', [text, taskId], (err) => {
        serverError(err, res);
        return res.status(200).json({ id: taskId, text });
    });
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    db.get('SELECT * FROM tasks WHERE id=?', taskId, (err, row) => {
        serverError(err, res);
        checkExist(row, res);

        return res.status(200).json(row);
    });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    db.run('DELETE FROM tasks WHERE id=?', taskId, (err) => {
        serverError(err, res);
        return res.status(204).send();
    });
});

app.listen(port, () => {
    console.log(`Server start on http://localhost:${port}`);
});