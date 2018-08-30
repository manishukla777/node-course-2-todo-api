var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = '5b87ba02413c07027148dade';

Todo.remove({}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});

//Todo.findOneAndRemove({_id:'5b88188f1f9bae04f571cfba'}).then((todo) => {
//    console.log(todo);
//}).catch((e) => {
//    console.log(e);
//});

//Todo.findByIdAndRemove('5b87ba02413c07027148dade').then((todo) => {
//    console.log(todo);
//}).catch((e) => {
//    console.log(e);
//});