var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = '5b87ba02413c07027148dade';

//if (!ObjectID.isValid(id)){
//    return console.log('Id not valid');
//}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos',todos);
},(e) => {
    console.log('Todos not found');
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo',todo);
},(e) => {
    console.log('Todo not found');
});

Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log('Id not found');
    }
    console.log('Todo by ID',todo);
}).catch((e) => console.log(e));

