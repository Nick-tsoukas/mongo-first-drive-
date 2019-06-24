/*
Reference to mongodb crud operations
========= Create operations ============
db.collection('some-collection').insert()
db.collection('some-collection').insertMany()
db.collection('some-collection').insertOne()

========= Read Operations ================
db.collection('some-collection').find({pass_options: 'here'});

what are object ids
GUI id global unique identify 
ability to scale well 
no change of collision from ID 
We can generate are own IDs


notes 
We can use the timestamp to check if the database was created for the day.
This way we do not keep on hitting the api
*/

// current db tasks, users, data-test 

// note cursor >>> points to document/data 

const url = 'mongodb://127.0.0.1:27017';
const createUser = require('./utils/createUser');
const connectionMessage = require('./utils/connectionMessage');


const { MongoClient, ObjectID } = require('mongodb');
const dbName = 'task-app';
const client = new MongoClient(url, {
    useNewUrlParser: true
});

client.connect((err) => {
    if (err) throw err;
    const db = client.db(dbName);
    connectionMessage();
    // createUser({name: 'kevin', coder: true}, db);

   db.collection('users').find({coder: true}).toArray((err, user) => {
       console.log(user);
   });

   

});
