const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Post = require('./models/post');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db = 'mongodb+srv://PolliShell:fibi2017@cluster0.7ooe4hd.mongodb.net/node-blog?retryWrites=true&w=majority';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Подключено к MongoDB');
        // Дальнейшие операции с базой данных
    })
    .catch(error => console.error('Ошибка подключения к MongoDB:', error));
const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({extended: false}));

app.use(express.static('styles'));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), {title});
});

app.get('/contacts', (req, res) => {
    const title = 'Contacts';
    Contact
        .find()
        .then((contacts) => res.render(createPath('contacts'), {contacts, title}))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        });
});

// app.get('/posts/:id', (req, res) => {
//     const title = 'Post';
//     const post = {
//         id: '1',
//         text: 'lorem ipsum dolor sit amet consectetur',
//         title: 'Post title',
//         date: '05.05.2021',
//         author: 'Yauhen',
//     };
//     res.render(createPath('post'), {title, post});
// });

app.get('/edit/:id', (req, res) => {
    const title = 'Edit Post';
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('edit-post'), {post, title}))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        });
});

app.put('/edit/:id', (req, res) => {
    const {title, author, text} = req.body;
    const {id} = req.params;
    Post
        .findByIdAndUpdate(id, {title, author, text})
        .then((result) => res.redirect(`/posts/${id}`))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        });
});

app.get('/posts/:id', (req, res) => {
    const title = 'Post';
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('post'), {post, title}))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        });
});

app.delete('/posts/:id', (req, res) => {
    const title = 'Post';
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        });
});


// app.get('/posts', (req, res) => {
//     const title = 'Posts';
//     const posts = [
//         {
//             id: '1',
//             text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
//             title: 'Post title',
//             date: '05.05.2021',
//             author: 'Yauhen',
//         }
//     ];
//     res.render(createPath('posts'), {title, posts});
// });

app.get('/posts', (req, res) => {
    const title = 'Posts';
    Post
        .find()
        .sort({createdAt: -1})
        .then((posts) => res.render(createPath('posts'), {posts, title}))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        });
});

app.post('/add-post', (req, res) => {
    const {title, author, text} = req.body;
    // const post={
    //     id: new Date(),
    //     date: (new Date()).toLocaleDateString(),
    //     title,
    //     author,
    //     text
    // };

    const post = new Post({title, author, text});
    post
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'})
        })
})
app.get('/add-post', (req, res) => {
    const title = 'Add Post';
    res.render(createPath('add-post'), {title});
});

app.use((req, res) => {
    const title = 'Error Page';
    res
        .status(404)
        .render(createPath('error'), {title});
});