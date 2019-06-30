/*
Reference to mongodb crud operations
========= Create operations ============
db.collection('some-collection').insert()
db.collection('some-collection').insertMany()
db.collection('some-collection').insertOne()

========= Read Operations ================
db.collection('some-collection').find({pass_options: 'here'});
db.collection('some-collection).findOne({_id: new ObjectId("somecodehere")});

========= Mongodb Operators =============== 
currentDate, inc, min, max, mul, rename, set, setOnInsert, unset
=========

notes 
We can use the timestamp to check if the database was created for the day.
This way we do not keep on hitting the api
*/

// current db tasks, users, data-test 

// note cursor >>> points to document/data 

const createUser = require('./utils/createUser');
const connectionMessage = require('./utils/connectionMessage'); // simply logs that the connection was successful 
const updateUserName = require('./utils/changeUserName');
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'task-app';
const client = new MongoClient(url, { useNewUrlParser: true });



client.connect((err) => {
    if (err) throw err;
    const db = client.db(dbName);
    connectionMessage();
    // updateUserName('James', 'Nick', db);





});