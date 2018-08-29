const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    
    console.log('Connected to mongodb server')
    
    const db = client.db('TodoApp');
    
    // delete one doc
    
//    db.collection('Users').deleteOne({name: 'Dev Mani'}).then((result) => {
//        console.log(result);
//    },(err) => {
//        console.log('Unable to delete user',err);
//    })
    
    // delete many docs
    
//    db.collection('Users').deleteMany({name: 'Dev Mani'}).then((result) => {
//        console.log(result);
//    },(err) => {
//        console.log('Unable to delete user',err);
//    })
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b8668ed4cc3a602e3fc3940')}).then((result) => {
        console.log(result);
    },(err) => {
        console.log('Unable to delete user',err);
    })
    
    client.close();
})