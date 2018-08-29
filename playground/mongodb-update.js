const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    
    console.log('Connected to mongodb server')
    
    const db = client.db('TodoApp');
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b8668ed4cc3a602e3fc3946')
    },{
        $set: {
            name: 'Dev Mani Shukla'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    },(err) => {
        console.log('Unable to update doc',err);
    });
    
    client.close();
})