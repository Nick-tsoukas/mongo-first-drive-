/*
Reference to mongodb crud operations
========= Create operations ============
db.collection('some-collection').insert()
db.collection('some-collection').insertMany()
db.collection('some-collection').insertOne()

========= Read Operations ================
db.collection('some-collection').find({pass_options: 'here'});
db.collection('some-collection).findOne({_id: new ObjectId("somecodehere")})

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

const createUser = require('./utils/createUser');
const connectionMessage = require('./utils/connectionMessage'); // simply logs that the connection was successful 
const {
    MongoClient,
    ObjectID
} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'task-app';
const client = new MongoClient(url, {
    useNewUrlParser: true
});


function updateUserName(userName, change, db) {
    db.collection('users').updateOne({
            name: userName
        }, {
            $set: {
                name: change
            }
        })
        .then((result) => {
            db.collection('users').findOne({
                    name: change
                })
                .then((user) => {
                    console.log(user)
                })
        })
        .catch((err) => {
            console.log(err);
        })
}


client.connect((err) => {
    if (err) throw err;
    const db = client.db(dbName);
    connectionMessage();

    updateUserName('Mike', 'Nick', db);





});