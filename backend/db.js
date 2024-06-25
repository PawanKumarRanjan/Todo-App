const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pawan:HPhoFcz6Zh7CYSPI@backenddb.w0zfppt.mongodb.net/?retryWrites=true&w=majority&appName=backendDB");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}