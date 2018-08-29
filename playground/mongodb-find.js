const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    
    console.log('Connected to mongodb server')
    
    const db = client.db('TodoApp');
    
//    db.collection('Todos').find({completed: false}).count().then((count) => {
//        console.log(`Todos count: ${count}`);
//    },(err) => {
//        console.log('Unable to fetch todos count',err);
//    })
    
    db.collection('Users').find({name: 'Dev Mani'}).toArray().then((docs) => {
        console.log('Users:');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch users',err);
    })
    
    client.close();
})


//db.collection('Todos').find({
//        _id: new ObjectID('5b85c0429253d80503657f53')
//    }).toArray().then((docs) => {
//        console.log('Todos:');
//        console.log(JSON.stringify(docs,undefined,2));
//    },(err) => {
//        console.log('Unable to fetch todos',err);
//    })