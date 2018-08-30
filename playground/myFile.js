const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    
    completed: {
        type: Boolean,
        default: false
    },
    
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Eat lunch',
    completed: true,
    completedAt: 2982018
});



newTodo.save().then((doc) => {
    console.log('Saved Todo',doc);
},(e) => {
    console.log('Unable to save todo');
});
