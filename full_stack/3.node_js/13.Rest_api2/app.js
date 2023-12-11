const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
const {v4} = require('uuid');

const PORT = 3030;

const pathToFile = (name) => path.resolve(__dirname, 'front', `${name}.ejs`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static files
app.use(express.static(path.join(__dirname, 'front')));

let tasks = [
    {id: v4(), text: 'go to gym'}
];

// GET endpoint to render tasks
app.get('/tasks', (req, res) => {
    res.render(pathToFile('index'), {tasks});
});

// GET endpoint to render the form for adding a task
app.get('/addTask', (req, res) => {
    res.render(pathToFile('addTask'));
});

// POST endpoint to add a task
app.post('/addTask', (req, res) => {
    const {text} = req.body;

    if (text) {
        const newTask = {id: v4(), text};
        tasks.push(newTask);
        res.redirect('/tasks'); // Redirect to the /tasks endpoint after adding a task
    } else {
        res.status(400).send('Bad Request: Task text is required');
    }
});

app.get('/changeTask/:id', (req, res) => {
    const { id } = req.params;
    const [task] = tasks.filter(el => el.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    // Вернуть задачу или выполнить другие действия
    res.render(pathToFile('changeTask'));
    res.json(task);
});

app.put('/changeTask/:id', (req, res) => {
    const { id } = req.params;
    const [task] = tasks.filter(el => el.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    // Вернуть задачу или выполнить другие действия
    res.json(task);
});


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening on port ${PORT}`);
});
