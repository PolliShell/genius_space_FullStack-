const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    title:String,
    text:String
})

const Task = mongoose.model("Task",taskSchema);

module.exports= Task;